
//slick - slider
$('.reviews_body').slick({
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.reviews_body'),
    prevArrow: '<div class="b-btn__slider_prev"> <svg width="31" height="141" viewBox="0 0 31 141" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 141L0 70.5L26.327 0L31 12.5137L9.34607 70.5L31 128.486L26.327 141Z" fill="#5B48EE"/></svg></div>',
    nextArrow: '<div class="b-btn__slider_next"><svg width="31" height="141" viewBox="0 0 31 141" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67304 141L31 70.5L4.67304 0L0 12.5137L21.6539 70.5L0 128.486L4.67304 141Z" fill="#5B48EE"/></svg></div>',
});

$('.reviews_body').slick('refresh');