$(document).ready(function () {
    const navbar = $('#top-info-bar')
    let prevScrollPos = 0;

    function updateNavbarState() {
        // Get the new Value
        const currentScrollPos = window.pageYOffset;
    
        if ((document.documentElement.scrollTop || document.body.scrollTop) === 0) {
            // User has scrolled up to the top of the page
            navbar.removeClass('scrolled');
        } else {
            navbar.addClass('scrolled');
        }

        // Update the old value
        prevScrollPos = currentScrollPos;
    }

    window.addEventListener('scroll', updateNavbarState);

    // Toggle mobile menu
    $('#menu-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('hidden');
    });
});


