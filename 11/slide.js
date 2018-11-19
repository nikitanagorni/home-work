document.querySelectorAll('.slides').forEach(function (element) {
    var slideSize = element.clientWidth,
        currentPosition = 0;

    var buttonLeft = document.querySelector('.button_2');

    var end = (document.querySelectorAll('.slide').length-1) * slideSize;

    buttonLeft.onclick = function () {
        
        if (currentPosition < end) {
            currentPosition += slideSize;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    };

    var buttonRight = document.querySelector('.button_1');

    buttonRight.onclick = function () {
        
        if (currentPosition != 0) {
            currentPosition -= slideSize;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    };
});