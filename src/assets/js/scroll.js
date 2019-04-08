$(document).ready(function () {

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('#nav-header').addClass('header-scrolled');
        } else {
            $('#nav-header').removeClass('header-scrolled');
        }
    });

    /* ======= Scrollspy ======= */
    $('body').scrollspy({
        target: '#header',
        offset: 100
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {
            offset: -50,
            'axis': 'y'
        });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });
});