let state = 0;
let allElementSlider = document.querySelectorAll(".swiper-slide");
let visibleMore = document.querySelector('.btn-more');


if (window.innerWidth < 768)
    {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
            },
            slidesPerView: 'auto',
        });


    }

if (window.innerWidth >= 768) {
    for (let i = 0; i < 6; i++)
    {
        allElementSlider[i].style.display = "flex";

    }

    visibleMore.onclick = function () {
        for (let i = 0; i < allElementSlider.length; i++)
        {
            allElementSlider[i].classList.toggle('visible');
        }
        if (state == 0) {
            visibleMore.innerHTML = 'Скрыть';
            state = 1;
            visibleMore.style.setProperty('--sq-img', "url(\"assets/icons/btn-more-reverse.svg\")");
        }
        else if (state == 1) {
            visibleMore.innerHTML = 'Показать все';
            state = 0;
            visibleMore.style.setProperty('--sq-img', "url(\"assets/icons/btn-more.svg\")");
        }

    }
}

if (window.innerWidth >= 1120) {
    for (let i = 0; i < 8; i++)
    {
        allElementSlider[i].style.display = "flex";

    }

    visibleMore.onclick = function () {
        for (let i = 0; i < allElementSlider.length; i++)
        {
            allElementSlider[i].classList.toggle('visible');
        }
        if (state == 0) {
            visibleMore.innerHTML = 'Скрыть';
            state = 1;
            visibleMore.style.setProperty('--sq-img', "url(\"assets/icons/btn-more-reverse.svg\")");
        }
        else if (state == 1) {
            visibleMore.innerHTML = 'Показать все';
            state = 0;
            visibleMore.style.setProperty('--sq-img', "url(\"assets/icons/btn-more.svg\")");
        }

    }
}





