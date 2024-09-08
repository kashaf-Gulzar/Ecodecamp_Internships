const phrases = ["new dishes", "Delicious Food", "Tasty Treasure", "Innovative Eats"];
let phraseIndex = 0;
const changingTextElement = document.getElementById('changing-text');

function changeText() {
    // Add fade-out class before changing the text
    changingTextElement.classList.add('fade-out');

    // Change the text after the fade-out animation completes
    setTimeout(() => {
        changingTextElement.textContent = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;

        // Remove the fade-out class and add fade-in class
        changingTextElement.classList.remove('fade-out');
        changingTextElement.classList.add('fade-in');
    }, 500); // 500ms matches the duration of the fade-out animation

    // Remove the fade-in class after the animation completes
    setTimeout(() => {
        changingTextElement.classList.remove('fade-in');
    }, 1000); // 1000ms total time for fade-out + fade-in
}

// Initial text
changeText();

// Change text every 2 seconds
setInterval(changeText, 2000);


/*-----------------*/
const phrases1 = [
    "Delicious Dishes for Every Home",
    "Savor the Flavor in Every Bite",
    "From Our Kitchen to Yours",
    "Cooking Up Joy in Every Meal",
    "Taste the Magic of Homemade Cooking",
    "Bringing Gourmet to Your Table",
    "Flavorful Creations for Every Taste",
    "Your Kitchen's Best Kept Secret",
    "Crafting Culinary Delights at Home",
    "Where Every Recipe Tells a Story"
];

let currentPhrase = 0;
const textElement = document.getElementById('dynamic-text');

function updateText() {
    textElement.textContent = phrases1[currentPhrase];
    currentPhrase = (currentPhrase + 1) % phrases1.length; // Cycle through the phrases
}

setInterval(updateText, 4000); // Change phrase every 4 seconds
updateText(); // Initialize with the first phrase



/*-----------------*/
// Menu Button Toggle for Small Screens
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the visibility of the nav links
});
