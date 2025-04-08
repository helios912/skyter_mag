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

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
});
$('.product-item__favorite').on('click',function(){



  $('.product-item__favorite').toggleClass('product-item__favorite--active')
})