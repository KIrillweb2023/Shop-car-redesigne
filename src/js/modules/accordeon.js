function accordeon(){
    let itemHead = document.querySelectorAll(".stages__item_head");
    let itemHead2 = document.querySelectorAll(".answers__item_head");

    function collapseSection(element, heightArg) {
        var sectionHeight = element.scrollHeight;
        var elementTransition = element.style.transition;
        element.style.transition = '';
        requestAnimationFrame(function () {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            requestAnimationFrame(function () {
                    element.style.height = heightArg;
                });
            });
            element.setAttribute('data-collapsed', 'true');
        }
    function expandSection(element) {
        var sectionHeight = element.scrollHeight;
        element.style.height = sectionHeight + 'px';
        element.addEventListener('transitionend', function (e) {
            });
            element.setAttribute('data-collapsed', 'false');
        }
    function itemAccordion(elem, heightArg) {
        
        elem.forEach(item => {
        item.addEventListener("click", (e) => {
            item.querySelector("svg").classList.toggle("activeArrow");
            var isCollapsed = item.parentNode.getAttribute('data-collapsed') === 'true';
            if (isCollapsed) {
            expandSection(item.parentNode);
            item.parentNode.setAttribute('data-collapsed', 'false');
            } else {
            collapseSection(item.parentNode, heightArg);
            }
        });
        });
    }
    if (window.screen.width >= 768) {
        itemAccordion(itemHead, "72px");
        itemAccordion(itemHead2, "50px");
    } else if (window.screen.width < 768 && window.screen.width >= 425) {
        itemAccordion(itemHead, "57px");
        itemAccordion(itemHead2, "38px");
    } else {
        itemAccordion(itemHead, "49px");
        itemAccordion(itemHead2, "38px");
    }
    let projects = document.querySelectorAll(".projects__item");
        projects.forEach((item, i) => {
        if (i > 3) {
            item.style.display = "none";
        }
    });
}

export default accordeon;