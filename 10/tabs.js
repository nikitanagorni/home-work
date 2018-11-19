(function () {
    "use strict";

    document.querySelectorAll('.tabs').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer');

        console.log('current value: ', selectElement.value);
        
        var nextElement = getTabByName(tabsContainerElement, selectElement.value);
        nextElement.style.display = "block";

        selectElement.onchange = function () {
            console.log('new value: ', selectElement.value);
            nextElement.style.display = "none";
            nextElement = getTabByName(tabsContainerElement, selectElement.value);
            nextElement.style.display = "block";
        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }
})();