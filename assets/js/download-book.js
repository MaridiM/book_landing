// Папки с файлами
const audio = [
    'assets/audio/Chapter_01.mp3',
    'assets/audio/Chapter_02.mp3',
    'assets/audio/Chapter_03.mp3',
    'assets/audio/Chapter_04.mp3',
    'assets/audio/Chapter_05.mp3',
    // Добавьте другие файлы из первой папки
];

const pdf = [
    
    'assets/pdf/Chapter_01.pdf',
    'assets/pdf/Chapter_02.pdf',
    'assets/pdf/Chapter_03.pdf',
    'assets/pdf/Chapter_04.pdf',
    'assets/pdf/Chapter_05.pdf',
    // Добавьте другие файлы из второй папки
];

// Создаем новый экземпляр JSZip
const zip = new JSZip();

// Добавляем файлы из первой папки
audio.forEach((filePath) => {
    fetch(filePath)
        .then((response) => response.blob())
        .then((blob) => {
            // Получаем имя файла без пути
            const fileName = filePath.split('/').pop();
            
            // Добавляем файл в архив с путем assets/audio/
            zip.file(`assets/audio/${fileName}`, blob);

        });
});

// Добавляем файлы из второй папки
pdf.forEach((filePath) => {
    fetch(filePath)
    .then((response) => response.blob())
    .then((blob) => {
        // Получаем имя файла без пути
        const fileName = filePath.split('/').pop();
        
        // Добавляем файл в архив с путем assets/pdf/
        zip.file(`assets/pdf/${fileName}`, blob);
    });
});


// Обработчик для кнопки "Скачать файлы"
document.querySelector('li[data-key="download"]').addEventListener('click', () => {
    // Генерируем zip-архив
    zip.generateAsync({ type: 'blob' }).then((blob) => {
        // Создаем ссылку для скачивания
        const url = window.URL.createObjectURL(blob);
        
        // Создаем ссылку для скачивания архива
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Бгаґавад_ґіта.zip';
        
        // Добавляем ссылку в документ и автоматически нажимаем на нее
        document.body.appendChild(a);
        a.click();
        
        // Очищаем ссылку
        window.URL.revokeObjectURL(url);
    });
});
