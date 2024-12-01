$(function () {
    $('.baner-section__slider').slick({
        dots: true,
        prevArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnprev"><img src="/images/arrow-right.svg"></button>',
        nextArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnnext"><img src="/images/arrow-left.svg"></button>',
    });
    $('.search__tabs-item').on('click', function (e) {
        e.preventDefault();
        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');
    });
});
