//TODO Module 2 – Lesson 14.02: The Math Object Challenge

//TODO 🧩 Real-World Math Object Challenge: Lottery Number Picker

//* 🎯 Scenario:
//  You’re building a lottery simulator. The system needs to pick 6 random numbers between 1 and 49, just like a real lottery ticket.

//* 📋 Requirements:
// 1. Pick 6 unique random numbers from 1 to 49
// 2. Sort them in ascending order
// 3. Display the numbers nicely formatted (e.g., with commas or dashes)

//* 🧠 What You Can Use:
// - Math.random()
// - Math.floor()
// - Arrays
// - .includes() or .Set() for checking uniqueness
// - .sort() for ordering

//* ✍️ Your Task:
//  Create a function or snippet that:
// - Generates 6 unique numbers between 1 and 49
// - Sorts them
// - Prints them as a string

//! ========== Challenge Result ==========

// 1. Create an empty array to store the unique numbers
function getLotteryNumbers(totalNumbers) {
    let randomNumbers = [];
    const minNum = 1;
    const maxNum = 49;

// 2. Use a while loop:
    while (randomNumbers.length < totalNumbers) {
        let guess = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        if (!randomNumbers.includes(guess)) {
            randomNumbers.push(guess)
        };
    };

// 3. Once you have 6 numbers:
    return randomNumbers.sort((a, b) => a - b).join(', ');
};

console.log('Your lottery numbers:', getLotteryNumbers(10));


//TODO 🎰 Slot Machine — Step-by-Step Dev Plan

// 🧠 Step 1: Decide What a "Slot" Is

let randomEmoji = ['🍒', '🔔', '💎', '🍋', '🍀', '✨', '🍁', '🏵️'];
let reelRandomly = [];

// 🎲 Step 2: Spin the Reels

for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * reelRandomly.length);

    let emoji = randomEmoji[randomIndex];
    reelRandomly.push(emoji);
};

console.log('REEL:', reelRandomly);

// 🟰 Step 3: Determine If It's a Win or Not

if (reelRandomly[0] === reelRandomly[1] && reelRandomly[1] === reelRandomly[2]) {
    console.log('🎉 JACKPOT! You win!');
} else if (reelRandomly[0] === reelRandomly[1] && reelRandomly[1] !== reelRandomly[2]) {
    console.log('🎊 A small win!');
} else {
    console.log('❌ Try again...');
};

// 💬 Step 4: Display the Results

let initialSpin = 100;
let rounds = 10;

function spinGame(rounds, initialSpin) { 
    let jackpotCount = 0;
    let smallWinCount = 0;
    let lossCount = 0;

    for (let i = 0; i < rounds; i++) {
        let reel = [];

        for (let j = 0; j < 3; j++) {
            let randomIndex = Math.floor(Math.random() * reelRandomly.length);
            let emoji = randomEmoji[randomIndex];
            reel.push(emoji);
        };

        if (reel[0] === reel[1] && reel[1] === reel[2]) {
            jackpotCount++;
        } else if (reel[0] === reel[1] || reel[0] === reel[2] || reel[1] === reel[2]) {
            smallWinCount++;
        } else {
            lossCount++;
        }
    
        console.log('REEL:', reel);
    };
    let creditBalance = (jackpotCount * 50) + (smallWinCount * 10);
    console.log('Credit Balance:', creditBalance);
    console.log('Jackpot Count:', jackpotCount);
    console.log('Small Win Count:', smallWinCount);
    console.log('Loss Count:', lossCount);
};

spinGame(rounds, initialSpin);

let spinLeft = initialSpin - rounds;
console.log('Spin left:', spinLeft);


//TODO 🎨 2. Random Hex Color Generator
//* 🧠 What you’ll build:
// - A function that generates a random hex color code (like #A1B2C3)
// - Logs the color and optionally applies it to the screen (if used in the browser)

//* 🎯 You'll practice:
// - Math.floor(), Math.random()
// - Base conversion with .toString(16)
// - String padding for 6-digit hex

//? 🔧 Used in: Web dev tools, theming systems, color testing.


//* Exercise
function generateHexColor() {
    let randomHex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    console.log('Random color:', '#' + randomHex);
};

generateHexColor();
generateHexColor();
generateHexColor();


function generateColorArray(count) {
    let hex = [];
    for (let i = 0; i < count; i++) {
        let generateHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        hex.push(generateHex);
    }
    return hex;
}

console.log(generateColorArray(5));


//TODO 🎯 Generate a Theme Set

function generateTheme(mode = 'light') {
    function generateHex() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    };
    
    const background = mode === 'dark' ? '#121212' : '#ffffff'
    const foreground = mode === 'light' ? '#f0f0f0' : '#000000'
    
    return {
        mode,
        primary: generateHex(),
        secondary: generateHex(),
        background,
        foreground,
    };
    
};

console.log('Theme colors:', generateTheme());

//TODO 🎨 Extending generateTheme(mode) for Light & Dark

console.log(generateTheme('dark'));
console.log(generateTheme('light'));

//TODO 🎨 PART 2: How to Generate CSS From Your Theme

function generateCSS(theme) {
    return `:root {
    --primary: ${theme.primary};
    --secondary: ${theme.secondary};
    --background: ${theme.background};
    --foreground: ${theme.foreground};
    }`;
    document.documentElement.setProperty('--primary', theme.primary);
    document.documentElement.setProperty('--background', theme.background);
    document.documentElement.setProperty('--foreground', theme.foreground);
};

const theme = generateTheme('light');

console.log(generateCSS(theme));

//TODO 🎲 3. Probability Simulator (Heads or Tails / Dice Match)
//* 🧠 What you’ll build:
// - A simulation that runs 1,000+ trials of a coin flip or dice roll
// - Tracks and logs how often each result appears
// - Calculates real-time percentages (like "Heads: 49.8%")

//* 🎯 You'll practice:
// - Random logic + percentages
// - Counters
// - Statistical breakdowns

//? 🔧 Used in: Game mechanics, A/B testing, teaching randomness.


//* ✅ Project: Coin Flip

function simulateCoinFlips(trials = 1000) {
    let heads = 0;
    let tails = 0;
    
    for (let i = 0; i < trials; i++) {
        Math.floor(Math.random() * 2) ? heads++ : tails++;
    };
    
    let headsPercent = (heads / trials * 100).toFixed(1);
    let tailsPercent = (tails / trials * 100).toFixed(1);

    console.log(`Heads: ${heads} ${headsPercent}%`);
    console.log(`Tails: ${tails} ${tailsPercent}%`);
};

simulateCoinFlips();

//* ✅ Project: Dice Roll Simulator

function diceRollSimulator(trials = 1000) {
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    
    for (let i = 0; i < trials; i++) {
        let roll = Math.random();
        if (roll < 0.14) {
            one++;
        } else if (roll < 0.28) {
            two++;
        } else if (roll < 0.42) {
            three++;
        } else if (roll < 0.56) {
            four++;
        } else if (roll < 0.70) {
            five++;
        } else {
            six++;
        };
    };
    
    let onePercent = (one / trials * 100).toFixed(1);
    let twoPercent = (two / trials * 100).toFixed(1);
    let threePercent = (three / trials * 100).toFixed(1);
    let fourPercent = (four / trials * 100).toFixed(1);
    let fivePercent = (five / trials * 100).toFixed(1);
    let sixPercent = (six / trials * 100).toFixed(1);

    console.log(`One: ${one} ${onePercent}%`);
    console.log(`Two: ${two} ${twoPercent}%`);
    console.log(`Three: ${three} ${threePercent}%`);
    console.log(`Four: ${four} ${fourPercent}%`);
    console.log(`Five: ${five} ${fivePercent}%`);
    console.log(`Six: ${six} ${sixPercent}%`);
};

diceRollSimulator();




