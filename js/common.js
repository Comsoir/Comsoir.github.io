$(function() {

    $(document).ready(function(){
        $('.wrap-team__slider').slick({
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 1.7,
            slidesToScroll: 1,
            arrows: false,
            autoPlay: true,
        });
        $('.prev').click(function(){
            $('.wrap-team__slider').slick('slickPrev');
        });

        $('.next').click(function(){
            $('.wrap-team__slider').slick('slickNext');
        });
    });

});
