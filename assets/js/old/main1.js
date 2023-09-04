/**
 * DOT PAGINATION
 */
const dotPaginationItems = document.querySelectorAll('.dot-pagination li');

dotPaginationItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('selected');

        dotPaginationItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('selected');
            }
        });
    });
});


// Tab Group Functionality
const tabLinks = document.querySelectorAll('.tab-group .tab a');
tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const tab = link.parentElement;
        tab.classList.add('active');

        const siblings = getSiblings(tab);
        siblings.forEach(sibling => {
            sibling.classList.remove('active');
        });

        const target = link.getAttribute('href');
        const tabContents = document.querySelectorAll('.tab-content > div');

        tabContents.forEach(content => {
            if (content !== document.querySelector(target)) {
                content.style.display = 'none';
            }
        });

        document.querySelector(target).style.display = 'block';
    });
});

// Helper function to get siblings of an element
function getSiblings(elem) {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
    }
    return siblings;
}
