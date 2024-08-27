// Tilføj klik-hændelse til startknappen
document.getElementById('startButton').addEventListener('click', function() {
    // Skjul startscreen
    document.getElementById('startscreen').style.display = 'none';

    // Vis guidescreen med grid layout
    const guideScreen = document.getElementById('guidescreen');
    guideScreen.classList.add('grid'); // Tilføj grid-klassen for at vise som grid
});