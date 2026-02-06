const messages = [
    "Are you sure? 👀",
    "Really sure?? 🧐",
    "Are you positive? 💔",
    "Pookie please... 🧐",
    "Just think about it! 💭",
    "If you say no, I will be really sad... 😢",
    "I will be VERY sad... 😭",
    "I will be VERY VERY VERY sad... 💔😭",
    "Ok fine, I give up... 😔",
    "Just kidding, SAY YES PLEASE! 🧐❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update button text with message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Grow yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
    
    // Add animation to yes button
    yesButton.style.animation = 'none';
    setTimeout(() => {
        yesButton.style.animation = 'pulse 0.6s ease-in-out';
    }, 10);
    
    // Random movement for no button to make it harder to click
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    noButton.style.transition = 'all 0.3s ease';
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function handleYesClick() {
    createConfetti();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#ff69b4', '#ffb6c1', '#ffc0cb', '#ff1493', '#d32f2f'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        animateConfetti(confetti);
    }
}

function animateConfetti(element) {
    let top = -10;
    let left = parseFloat(element.style.left);
    const velocity = Math.random() * 3 + 2;
    const sway = (Math.random() - 0.5) * 2;
    
    const interval = setInterval(() => {
        top += velocity;
        left += sway;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
        element.style.opacity = 1 - (top / window.innerHeight);
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            element.remove();
        }
    }, 20);
}
