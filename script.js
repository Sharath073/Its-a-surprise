const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');
const catGif = document.getElementById('cat-gif');
const btnGroup = document.querySelector('.btn-group');

// Fun text for when she clicks "No"
const noTexts = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again! 💔",
    "Don't do this to me! 😭",
    "You're breaking my heart! 💔"
];

// Updated sequence of questions and corresponding LOCAL GIFs
const sequence = [
    {
        q: "Are you ready for it?",
        gif: "cat-cute.gif" 
    },
    {
        q: "First... do you love me?",
        gif: "cat-heart.gif" 
    },
    {
        q: "A lot? Like, the most in the whole world?",
        gif: "cat-hug.gif" 
    }
];

let noClickCount = 0;
let sequenceIndex = 0;

// What happens when she clicks "No"
noBtn.addEventListener('click', () => {
    // Change the "No" text playfully
    noBtn.innerText = noTexts[noClickCount % noTexts.length];
    noClickCount++;

    // Make the "Yes" button bigger and bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 10}px`;
    yesBtn.style.padding = `${currentSize + 5}px ${currentSize + 15}px`;
});

// What happens when she clicks "Yes"
yesBtn.addEventListener('click', () => {
    if (sequenceIndex < sequence.length) {
        // Move to the next question in the sequence
        questionText.innerText = sequence[sequenceIndex].q;
        catGif.src = sequence[sequenceIndex].gif;
        sequenceIndex++;

        // Reset the "No" button size and text for the new question
        noBtn.innerText = "No 🙅‍♀️";
        noClickCount = 0;
        yesBtn.style.fontSize = "1.1rem";
        yesBtn.style.padding = "12px 24px";

    } else {
        // The Final Birthday Message!
        questionText.innerHTML = "HAPPY 20TH BIRTHDAY! 🎂💖<br><br>You are the most amazing girlfriend ever. I love you so much! 🎉";
        
        // Using the local party GIF
        catGif.src = "cat-party.gif"; 
        
        // Hide the Yes/No buttons
        btnGroup.style.display = 'none';

        // Fire off confetti!
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#fecfef', '#ffffff']
        });
    }
});
