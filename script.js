const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
const gifs = [
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdzMGlwaDBsYXpmdXFsbWk5bXM5d3c0NHR1dWl4aHZjdXF3M2U3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IG0skAiznZQLde/giphy.gif'];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImg = document.querySelector('.gif-container');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    gifImg.src = gifs[messageIndex % gifs.length];
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
