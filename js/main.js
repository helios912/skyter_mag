$(function () {
    $('.baner-section__slider').slick({
        dots: true,
        prevArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnprev"><img src="/images/arrow-right.svg"></button>',
        nextArrow:
            '<button class="baner-section__slider-btn baner-section__slider-btnnext"><img src="/images/arrow-left.svg"></button>',
    });
    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass(
            'tabs-content--active'
        );

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
});
$('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
});
$('.product-slider').slick({
    infinite: false,
    speed: 300,
    prevArrow:
        '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="/images/arrow-black-right.svg"></button>',
    nextArrow:
        '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="/images/arrow-black-left.svg"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
