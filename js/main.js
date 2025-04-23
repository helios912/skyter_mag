$(function () {
    $('.baner-section__slider').slick({
        dots: true,
        prevArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnprev"><img src="/images/arrow-right.svg"></button>',
        nextArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnnext"><img src="/images/arrow-left.svg"></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass(
            'tabs-content--active'
        );

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });
    $('.product-slider').slick({
        prevArrow:
            '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="/images/arrow-black-right.svg"></button>',
        nextArrow:
            '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="/images/arrow-black-left.svg"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });
    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass(
            'catalog__filter-button--active'
        );
        $('.product-item__wrapper').removeClass('product-item__wrapper-list');
    });
    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass(
            'catalog__filter-button--active'
        );
        $('.product-item__wrapper').addClass('product-item__wrapper-list');
    });

    $('.js-range-slider').ionRangeSlider({
        type: 'double',
        min: 100000,
        max: 500000,
        from: 200000,
        to: 300000,
    });
    $('.menu__btn').on('click', function () {
        $('.menu-mobile-list').toggleClass('menu-mobile-list--active');
    });
    $('.footer__top-title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__bottop--active');
    });
    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle();
    });
});
