// Tilføj klik-hændelse til startknappen
document.getElementById('startButton').addEventListener('click', function() {
    // Skjul startscreen
    document.getElementById('startscreen').style.display = 'none';

    // Vis guidescreen med grid layout
    const guideScreen = document.getElementById('guidescreen');
    guideScreen.classList.add('grid'); // Tilføj grid-klassen for at vise som grid
});

// Tilføj klik-hændelse til "vælg avatar"-knappen
document.getElementById('chooseavatar').addEventListener('click', function() {
    // Skjul guidescreen
    document.getElementById('guidescreen').style.display = 'none';

    // Vis vælg avatar side
    const guideScreen = document.getElementById('avatar-container');
    guideScreen.classList.add('flex'); // Tilføj flex-klassen for at vise som flex
});

// Find elementerne
const infoIcons = document.querySelectorAll('.info-icon');
const infoBoxes = document.querySelectorAll('.info-box');

// Find alle infoIcon-elementer
infoIcons.forEach(infoIcon => {
    // Add click-funktion til alle elementer
    infoIcon.addEventListener('click', () => {
        // Find den tilsvarende infoboks
        const infoBox = infoIcon.nextElementSibling;

        // Bestem om infoBoxen vises eller ej når der klikkes på spørgsmålstegnet
        if (infoBox.style.display === 'block') {
            infoBox.style.display = 'none';
        } else {
            infoBox.style.display = 'block';
        }
    });
});



const avatars = document.querySelectorAll('.avatar');

// Tilføj click event listeners til alle avatars
avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        // Find avatarens billede og navn
        const avatarImg = avatar.querySelector('img').src;
        const avatarName = avatar.querySelector('h2').innerText;

        // Gem avatar informationen i sessionStorage
        sessionStorage.setItem('selectedAvatarImg', avatarImg);
        sessionStorage.setItem('selectedAvatarName', avatarName);

        // Naviger til næste side (eks. 'nextpage.html')
        window.location.href = 'nextpage.html';
    });
});


/* 
Til næste html side
sessionStorage: bruges til midlertidigt at gemme data (f.eks. valgt avatar), som er tilgængelig på tværs af sider i den aktuelle session. 
Når brugeren genindlæser eller forlader websiden, fjernes dataene automatisk.

Hentning af data: På den næste side (f.eks. nextpage.html) henter vi den gemte information og viser den ved hjælp af document.getElementById

<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Vælg et rum</title>
</head>
<body>

    <div id="selected-avatar">
        <h1>Du har valgt:</h1>
        <img id="avatar-image" src="" alt="Valgt avatar">
        <h2 id="avatar-name"></h2>
    </div>

    <script>
        // Hent den valgte avatars information fra sessionStorage
        const avatarImg = sessionStorage.getItem('selectedAvatarImg');
        const avatarName = sessionStorage.getItem('selectedAvatarName');

        // Sæt avatarbilledet og navnet i DOM'en
        document.getElementById('avatar-image').src = avatarImg;
        document.getElementById('avatar-name').innerText = avatarName;
    </script>
    
</body>
</html>
*/