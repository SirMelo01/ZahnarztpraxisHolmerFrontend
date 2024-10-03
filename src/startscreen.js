window.onload = function() {
    setTimeout(() => {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainContent = document.getElementById('main-content');

        // Fade-Out Effekt
        welcomeScreen.style.opacity = '0';

        // Hauptinhalt anzeigen nach dem Fade-Out
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1300); // Zeit für den Fade-Out (2.5 Sekunden)
    }, 1200); // Wartezeit, bevor der Fade-Out beginnt (0.5 Sekunden)
};

