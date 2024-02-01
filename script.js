var audio = document.getElementById("myAudio");
var backgroundImage = document.getElementById("backgroundImage");
var alternativeBackground = document.getElementById("alternativeBackground");
var muteButton = document.getElementById("muteButton");
var viewPoemButton = document.getElementById("viewPoemButton");

function playSong() {
    audio.play();
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? "🔊 Unmute" : "🔇 Mute";
}

function generateLoveQuote() {
    var loveQuotes = [
        "Your fiery locks light up my world like a blazing sun.",
        "In the dance of love, your red hair is a flame that never dims.",
        "Raneem, the fire in your heart ignites a passionate love in mine.",
        "With every strand of red, you weave a story of warmth and desire.",
        "In the tapestry of our love, your red-haired glow is the most vibrant thread.",
        // Add more personalized love quotes here
    ];

    var surpriseQuotes = [
        "In the realm of our friendship, every moment is a magical adventure.",
        "Your laughter is the melody that plays in the symphony of our friendship.",
        "Like a secret garden, our friendship blooms with each shared moment.",
        "In the dance of time, our friendship is a waltz of joy and understanding.",
        "Surrounded by the stars of our connection, our friendship is a constellation of love.",
        "In the journey of friendship, every step is a dance of joy and understanding.",
        "Your friendship is a treasure chest, filled with moments of joy and laughter.",
        "With you, every day feels like a magical journey through the realms of happiness.",
        "Our friendship is a symphony, each note playing a melody of love and care.",
        "In the book of friendship, our story is written with ink of laughter and chapters of shared dreams.",
        // Add more surprise quotes here
    ];

    var allQuotes = loveQuotes.concat(surpriseQuotes);

    displayRandomQuote(allQuotes);
}

function displayRandomQuote(quotes) {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var loveQuoteElement = document.getElementById("loveQuote");
    loveQuoteElement.textContent = quotes[randomIndex];
}

// Call the function to display the affection message
function toggleBackgroundAndPlay() {
    // Toggle background image visibility
    alternativeBackground.style.opacity = 0;
    backgroundImage.style.opacity = 1;
    // Play the audio after a short delay (adjust as needed)
    setTimeout(function () {
        playSong();
    }, 500); // 500 milliseconds delay, adjust as needed
    // Hide everything except the mute button and view poem button
    hideElements();
    // Remove the main title
    document.querySelector('h1').style.display = 'none';
}

function hideElements() {
    var elementsToHide = document.querySelectorAll('#poem-container, #invite, #loveQuote, #generateLoveQuote, #affectionMessage');
    elementsToHide.forEach(function (element) {
        element.style.display = 'none';
    });

    // Show the mute button and view poem button
    muteButton.style.display = 'block';
    viewPoemButton.style.display = 'block';
    document.getElementById('generateLoveQuote').style.display = 'block';
}

function togglePoem() {
    var poemContainer = document.getElementById('poem-container');
    var invite = document.getElementById('invite');
    var loveQuote = document.getElementById('loveQuote');
    var generateLoveQuote = document.getElementById('generateLoveQuote');
    var affectionMessage = document.getElementById('affectionMessage');

    if (poemContainer.style.display === 'none') {
        // If elements are hidden, show them
        var elementsToShow = [poemContainer, invite, loveQuote, generateLoveQuote, affectionMessage];
        elementsToShow.forEach(function (element) {
            element.style.display = 'block';
        });

        // Hide the mute button and view poem button
        muteButton.style.display = 'none';
        viewPoemButton.textContent = 'Hide Poem';
    } else {
        // If elements are visible, hide them
        var elementsToHide = [poemContainer, invite, loveQuote, generateLoveQuote, affectionMessage];
        elementsToHide.forEach(function (element) {
            element.style.display = 'none';
        });

        // Show the mute button and view poem button
        muteButton.style.display = 'block';
        viewPoemButton.textContent = 'View Poem Again';
    }
}
