// Установите путь к скрипту рабочего потока PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js';

const url = 'assets/pdf/Chapter_01.pdf'
const loadingBook = pdfjsLib.getDocument(url);

let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1,
    canvas = document.querySelector('#read-book')
    ctx = canvas.getContext('2d')

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
function renderPage (num) {
    pageRendering = true

    // Using promise to fetch the page
    pdfDoc.getPage(num).then((page) => {
        const viewport = page.getViewport({ scale })
        canvas.height = viewport.height;
        canvas.width = viewport.width;


        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: ctx,
            viewport
        };

        const renderBook = page.render(renderContext);

        // Wait for rendering to finish
        renderBook.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                // New page rendering is pending
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // Update page counters
    document.querySelector('.page__num').textContent = `${num} | ${page_count}`;
    // Update zoom counters
    document.querySelector('.zoom__count').textContent = `${scale * 100}%`;
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num, zoom = 1) {
  if (pageRendering) {
    pageNumPending = num;
    scale = zoom;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}
document.querySelector('.btn__page--prev').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}
document.querySelector('.btn__page--next').addEventListener('click', onNextPage);



/**
 * Displays zoom plus.
 */
function onZoomIn() {
    if(pdfDoc === null) return;
    if(scale >= 2) return
    scale += 0.25;
    queueRenderPage(pageNum, scale)
}
document.querySelector('.btn__zoom--in').addEventListener('click', onZoomIn);

/**
 * Displays zoom minus.
*/
function onZoomOut() {
    if(pdfDoc === null) return;
    if(scale <= 0.75) return
    scale -= 0.25;
    queueRenderPage(pageNum, scale)

}
document.querySelector('.btn__zoom--out').addEventListener('click', onZoomOut);

/**
 * Asynchronously downloads PDF.
 */
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;
  page_count = pdfDoc.numPages;
  // Initial/first page rendering
  renderPage(pageNum);
});



// On Read
function onRead () {
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none'
    });
    document.querySelector('.nav').style.display = 'none';
    document.querySelector('.read-book__wrapper ').style.display = 'block';
}

// Close Read
function onExit () {
    document.querySelector('body').style.overflowY = 'auto'
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'flex'
    });
    document.querySelector('.nav').style.display = 'flex';
    document.querySelector('.read-book__wrapper ').style.display = 'none';
    
}
document.querySelector('.btn__exit').addEventListener('click', onExit);
document.querySelector('li[data-key="read"]').addEventListener('click', onRead);
// document.querySelector('.btn__read').addEventListener('click', onRead);