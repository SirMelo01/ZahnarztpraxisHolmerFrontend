$(document).ready(function () {
    var lastScrollTop = 0;
    var delta = 5; // Minimal scroll distance before the bar reacts
    var navbarHeight = $('#top-info-bar').outerHeight();

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        // Check if the user has scrolled enough
        if (Math.abs(scrollTop - lastScrollTop) > delta) {
            if (scrollTop > lastScrollTop) {
                // User scrolls down
                $('#top-info-bar').addClass('scrolled'); // Shrink the top bar
            } else if (scrollTop < 30) {
                // User scrolls back up
                $('#top-info-bar').removeClass('scrolled'); // Reset the top bar size
            }
            lastScrollTop = scrollTop;
        }
    });

    // Toggle mobile menu
    $('#menu-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('hidden');
    });
});
