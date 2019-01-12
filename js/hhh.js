$(document).ready(function () {
    $('#top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })




    var $link = $('.navbar a');

    $link.click(function (e) {
        e.preventDefault();
        $link.removeClass('active');
        var id = $(this).addClass('active').attr('href');
        var target = $(id).offset().top - 10;

        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })
    $(window).scroll(function () {
        var $link = $('.navbar a');
        var scroll = $(this).scrollTop();;
        $link.each(function () {
            var attr = $(this).attr('href');
            var selector = $(attr).offset().top - 70;
            if (scroll >= selector) {
                $link.removeClass('active')
                $(this).addClass('active');
            }
        })
    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    })


});
