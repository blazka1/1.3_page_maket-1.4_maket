
const allElementSlider = document.querySelectorAll(".swiper-slide");
const visibleMore = document.querySelector('.btn-more');



visibleMore.addEventListener('click',  () => {
    for (let i = 0; i < allElementSlider.length; i++) {
        allElementSlider[i].classList.toggle('visible');
    }
    if (visibleMore.classList.contains('close')) {
        visibleMore.classList.remove('close');
        visibleMore.classList.add('open');
        visibleMore.textContent = 'Скрыть';

    } else if (visibleMore.classList.contains('open')) {
        visibleMore.classList.remove('open');
        visibleMore.classList.add('close');
        visibleMore.textContent = 'Показать все';

    }

})
if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 'auto',
    });
}

if (window.innerWidth >= 768) {
    for (let i = 0; i < 6; i++) {
        allElementSlider[i].style.display = "flex";
    }
}

if (window.innerWidth >= 1120) {
    for (let i = 0; i < 8; i++) {
        allElementSlider[i].style.display = "flex";

    }
}





