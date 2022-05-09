$(document).ready(function () {

    function hamburgerToX() {
        $('.navbar-toggler span').each(function () {
            let dataClass = $(this).attr('data-class');
            $(this).toggleClass(dataClass);
        });
    }
    $('.navbar-toggler').click(function () {
        hamburgerToX();
    });


    function setMarginTop() {
        let headerHeight = $('header').outerHeight();
        $('main').css('marginTop', headerHeight);
    }
    function setMarginViaScroll() {
        let headerHeight = $('header').outerHeight();
        if (($(window).scrollTop()) > headerHeight) {
            $('header').addClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        } else {
            $('header').removeClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        }
    }
    setMarginViaScroll();
    setMarginTop();
    $(window).resize(function () {
        setMarginTop();
    }).scroll(function () {
        setMarginViaScroll();
        animation();
    });

    function animation() {
        let windowHeight = $(window).height();
        let scrollFromTop = $(window).scrollTop();
        $('.animation').each(function () {
            let elementPosition = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let animationDelay = $(this).attr('data-delay');
            if (elementPosition < scrollFromTop + windowHeight - 100) {
                $(this).css('animation-delay', animationDelay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
function showLink(){
    $('.portfolio-navmenu a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        let dataDisplay = $(this).attr('data-display');
        let sectionHeight = $('.portfolio').outerHeight();
        $('.portfolio .row > div').each(function () {
            if ($(this).attr('data-display').includes(dataDisplay)) {
                $(this).show(700);
                $('.portfolio').height(sectionHeight);
                $(this).find('a.far').attr('data-fancybox', 'portfolio-gallery');
            } else {
                $(this).hide(700);
                $('.portfolio').height(sectionHeight);
                $(this).find('a.far').removeAttr('data-fancybox');
            }
        });

    });
};
showLink();
    $window().resize(function(){
    showLink();
    });
   


    if ($('.testimonials-slider').length > 0){
        $('.testimonials-slider').owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                   
                }
            }
        });
    }
    
    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {

                email: {
                    required: true,
                    email: true
                }


            },
            messages: {

                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite ispravan email'

                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-message'));
            }

        });
    });

});

