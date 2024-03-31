$(document).ready(function() {

    $(".slider2").owlCarousel({
        smartSpeed: 1000,
        items: 2,
        margin: 20,
        nav: true,
        navText: ["", ""],
        dots: false,
        responsiveClass: true,
        lazyLoad: true,
        autoHeight: true,
        loop: true,
        responsive: {
            767: {
                items: 2,
                dots: true,
            },
            0: {
                dots: true,
                center: true,
                items: 1,

            }
        }
    });
    $(".slider3").owlCarousel({
        smartSpeed: 1000,
        items: 6,
        margin: 20,
        nav: true,
        navText: ["", ""],
        dots: false,
        responsiveClass: true,
        lazyLoad: true,
        // autoHeight: true,
        // loop: true,
        responsive: {
            1100: {
                items: 6
            },
            991: {
                items: 5
            },
            768: {
                items: 4,
            },
            320: {
                items: 3,
                dots: true,
                nav: false,
                smartSpeed: 300,
            },
            0: {
                center: true,
                dots: true,
                nav: false,
                items: 2
            }
        }
    });
    Fancybox.bind('[data-fancybox]', {
        // Custom options for all galleries
    });


    $("#menu").navigation();

    $(".navi .navbar-nav li a").on('click', function() {
        $("#toggle").prop('checked', false);
    });

    var $menu = $("#menu");


    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $menu.hasClass("def")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("def")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("fixed transbg")
                    .addClass("def")
                    .fadeIn('fast');
            });
        }
    }); //scroll

    /* Плавный скролл */
    var $firstname = $("#firstname");
    $(".scroll").on('click', function(event) {
        // console.log($menu.outerHeight());
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $menu.outerHeight()

            }, 800, function() {
                window.location.hash = hash;
            });
            $firstname.focus();
        }
    });

    $("#form1").submit(function() {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("#form1").serialize()
        }).done(function() {
            $("#myModal_2_1").modal('show');
        });
        return false;
    });
}); //jQuery

$(window).on('load resize', function() {
        if ($(this).width() > 991) {
            $(".slider").trigger('destroy.owl.carousel');
        } else {
            $(".slider").owlCarousel({
                responsiveClass: true,
                lazyLoad: true,
                autoHeight: true,
                items: 2,
                margin: 20,
                dots: true,
                responsive: {
                    580: {
                        items: 2
                    },
                    0: {
                        center: true,
                        items: 1
                    }
                }
            });
        }
    })
    // $(function($){
    //   var max_col_height = 0; // максимальная высота, первоначально 0
    //   $('.columns').each(function(){ // цикл "для каждой из колонок"
    //     if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
    //       max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
    //     }
    //   });
    //   $('.columns').height(max_col_height + 30); // устанавливаем высоту каждой колонки равной значению максимальной высоты

// });