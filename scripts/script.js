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


    // Funktion zur Berechnung der Bannerhöhe und Zuweisung an die CSS-Variable
    function setInfoBannerHeight() {
        var bannerHeight = $('#info-banner').outerHeight() || 0;
        $(':root').css('--info-banner-height', bannerHeight + 'px');
    }

    // Initiale Einstellung der Bannerhöhe
    setInfoBannerHeight();

    // Neu berechnen, falls Fenstergröße oder Inhalt sich ändert
    $(window).on('resize', setInfoBannerHeight);

    // Toggle mobile menu
    $('#menu-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('hidden');
    });



    $('.faq-question').click(function() {
        // FAQ-Answer öffnen/schließen
        $(this).next('.faq-answer').slideToggle();

        // Toggle-Symbol ändern (+ / -)
        var toggleSymbol = $(this).find('.faq-toggle');
        toggleSymbol.text(toggleSymbol.text() === '+' ? '-' : '+');

        // Alle anderen Antworten schließen
        $('.faq-answer').not($(this).next('.faq-answer')).slideUp();
        $('.faq-toggle').not(toggleSymbol).text('+');
    });



    
    // Mobile Menu Toggle
    $('#menu-toggle').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
    });

    // Swiper Slider
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        loop: true, // Aktiviert das endlose Swipen
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Autoplay nach Benutzung der Buttons nicht deaktivieren
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true, // Bullets anklickbar machen
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });




});


