$(document).ready(function(){

    // feedback slider
    $('.feed-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.p-i',
        layoutMode: 'fitRows'
    });

    $('.portfolio-nav li').on('click', function() {
        $(".portfolio-nav li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
          });
    });
});