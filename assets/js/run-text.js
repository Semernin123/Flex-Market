document.addEventListener('DOMContentLoaded', function () {
    var title = "Flex-Market"; // Здесь вы можете установить свой заголовок
    var pageTitle = document.getElementById('page-title');
    var index = 0;

    function animateTitle() {
        if (index <= title.length) {
            pageTitle.innerHTML = title.substring(0, index);
            index++;
            setTimeout(animateTitle, 250); // Задержка между добавлением каждой буквы (в миллисекундах)
        } else {
            setTimeout(resetTitle, 3000); // Задержка перед сбросом (в миллисекундах)
        }
    }

    function resetTitle() {
        index = 0;
        animateTitle();
    }
    
    animateTitle();
});