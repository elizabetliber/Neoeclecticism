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

function headerType() {
    const typed = new Typed('.hero__title-typed', {
        strings: ["Wallet music", "Blockchain history"],
        typeSpeed: 80,
        backSpeed: 25,
        startDelay: 1000,
        backDelay: 1200,
        loop: true,
        loopCount: Infinity,
    });
}
headerType();

// document.addEventListener('DOMContentLoaded', function(){
//     Typed.new('.type', {
//         strings: ["Wallet music Blockchain history"],
//         stringsElement: null,
//         // typing speed
//         typeSpeed: 60,
//         // time before typing starts
//         startDelay: 600,
//         // backspacing speed
//         backSpeed: 20,
//         // time before backspacing
//         backDelay: 500,
//         // loop
//         loop: true,
//         // false = infinite
//         loopCount: 5,
//         // show cursor
//         showCursor: false,
//         // character for cursor
//         cursorChar: "|",
//         // attribute to type (null == text)
//         attr: null,
//         // either html or text
//         contentType: 'html',
//     });
// });