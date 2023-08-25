function forEach (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

let tabNodes = document.querySelectorAll('.tab-group button.tab');
let articleNodes = document.querySelectorAll('.tab-group .tab-content');

articleNodes[0].classList.add('active');
tabNodes[0].classList.add('active');
forEach(tabNodes, function (index, value) {
    value.addEventListener("click", function(){
        console.log("hello")
        handleTab(index);
    })
});

function handleTab(i) {
    forEach(articleNodes, function (index, value) {
        articleNodes[index].classList.remove('active');
        tabNodes[index].classList.remove('active');
    });

    articleNodes[i].classList.add('active');
    tabNodes[i].classList.add('active');
}

///////////////////////////////////////////////////////////////////////////

const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});