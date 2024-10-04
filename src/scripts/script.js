$(document).ready(function () {
    var lastScrollTop = 0;
    var delta = 5; // Minimaler Scrollabstand, bevor die Leiste reagiert
    var navbarHeight = $('#top-info-bar').outerHeight();

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        // Prüfen, ob der Benutzer genug gescrollt hat
        if (Math.abs(scrollTop - lastScrollTop) > delta) {
            if (scrollTop > lastScrollTop) {
                // Der Benutzer scrollt nach unten
                $('#top-info-bar').css('top', '-100px'); // Verstecke die obere Leiste
                $('nav').css('top', '0'); // Die Navbar bleibt oben

                // Verschiebe das Logo nur, wenn es noch nicht in der Navbar ist
                if (!$('#nav-logo').length) {
                    var logo = $('#top-logo').detach(); // Entferne das Logo aus der oberen Leiste
                    $('.max-w-4xl').prepend('<div id="nav-logo" class="flex items-center">' + logo.prop('outerHTML') + '</div>');
                }
            } else if (scrollTop < 30) {
                // Der Benutzer scrollt ganz nach oben
                $('#top-info-bar').css('top', '0'); // Zeige die obere Leiste wieder an
                $('nav').css('top', '5rem'); // Die Navbar rutscht wieder leicht nach unten

                // Verschiebe das Logo zurück in die obere Leiste
                if ($('#nav-logo').length) {
                    var logo = $('#nav-logo img').detach(); // Entferne das Logo aus der Navbar
                    $('#top-info-bar .flex.items-center.space-x-2').prepend(logo); // Füge das Logo in die obere Leiste ein
                    $('#nav-logo').remove(); // Entferne den leeren Logo-Container aus der Navbar
                }
            }
            lastScrollTop = scrollTop; // Aktuellen Scroll-Wert speichern
        }
    });
});
