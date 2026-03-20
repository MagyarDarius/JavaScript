let deckId = "";
let playerCards = [];
let dealerCards = [];
let gameOver = false;

const playerCardsDiv = document.getElementById("player-cards");
const dealerCardsDiv = document.getElementById("dealer-cards");
const playerScoreSpan = document.getElementById("player-score");
const dealerScoreSpan = document.getElementById("dealer-score");
const resultText = document.getElementById("result-text");

const startBtn = document.getElementById("start-btn");
const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");

startBtn.addEventListener("click", startGame);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);

async function startGame() {
    gameOver = false;
    playerCards = [];
    dealerCards = [];
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";
    resultText.textContent = "Game started!";
    
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await res.json();
    deckId = data.deck_id;

    await drawCard(playerCards, playerCardsDiv);
    await drawCard(dealerCards, dealerCardsDiv);
    await drawCard(playerCards, playerCardsDiv);
    await drawCard(dealerCards, dealerCardsDiv);

    updateScores();
}

async function drawCard(hand, container) {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await res.json();
    const card = data.cards[0];

    hand.push(card);

    const img = document.createElement("img");
    img.src = card.image;
    img.style.width = "60px";
    img.style.margin = "5px";

    container.appendChild(img);
}

function calculateScore(hand) {
    let score = 0;
    let aces = 0;

    hand.forEach(card => {
        if (["KING", "QUEEN", "JACK"].includes(card.value)) {
            score += 10;
        } else if (card.value === "ACE") {
            aces += 1;
            score += 11;
        } else {
            score += parseInt(card.value);
        }
    });

    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }

    return score;
}

function updateScores() {
    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(dealerCards);

    playerScoreSpan.textContent = playerScore;
    dealerScoreSpan.textContent = dealerScore;

    if (playerScore > 21) {
        endGame("You busted! Dealer wins.");
    }
}

async function hit() {
    if (gameOver) return;

    await drawCard(playerCards, playerCardsDiv);
    updateScores();
}

async function stand() {
    if (gameOver) return;

    let dealerScore = calculateScore(dealerCards);

    while (dealerScore < 17) {
        await drawCard(dealerCards, dealerCardsDiv);
        dealerScore = calculateScore(dealerCards);
    }

    updateScores();
    determineWinner();
}

function determineWinner() {
    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(dealerCards);

    if (dealerScore > 21) {
        endGame("Dealer busted! You win!");
    } else if (playerScore > dealerScore) {
        endGame("You win!");
    } else if (playerScore < dealerScore) {
        endGame("Dealer wins!");
    } else {
        endGame("It's a draw!");
    }
}

function endGame(message) {
    resultText.textContent = message;
    gameOver = true;
}
let balance = 1000;
let currentBet = 0;

const balanceSpan = document.getElementById("balance");
const betSpan = document.getElementById("current-bet");
const betButtons = document.querySelectorAll(".bet-btn");
const clearBetBtn = document.getElementById("clear-bet");
const bettingPanel = document.getElementById("betting-panel");

function updateBetUI() {
    balanceSpan.textContent = balance;
    betSpan.textContent = currentBet;
}

betButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = parseInt(btn.dataset.value);

        if (balance >= value) {
            balance -= value;
            currentBet += value;
            updateBetUI();
        }
    });
});

clearBetBtn.addEventListener("click", () => {
    balance += currentBet;
    currentBet = 0;
    updateBetUI();
});

function disableBetting() {
    bettingPanel.classList.add("disabled");
}

function enableBetting() {
    bettingPanel.classList.remove("disabled");
}

async function startGame() {
    if (currentBet === 0) {
        resultText.textContent = "Place a bet first!";
        return;
    }

    disableBetting();

    gameOver = false;
    playerCards = [];
    dealerCards = [];
    playerCardsDiv.innerHTML = "";
    dealerCardsDiv.innerHTML = "";
    resultText.textContent = "Game started!";
    
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await res.json();
    deckId = data.deck_id;

    await drawCard(playerCards, playerCardsDiv);
    await drawCard(dealerCards, dealerCardsDiv);
    await drawCard(playerCards, playerCardsDiv);
    await drawCard(dealerCards, dealerCardsDiv);

    updateScores();
}

function endGame(message) {
    resultText.textContent = message;
    gameOver = true;

    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(dealerCards);

    if (playerScore <= 21 && (dealerScore > 21 || playerScore > dealerScore)) {
        balance += currentBet * 2;
    } else if (playerScore === dealerScore) {
        balance += currentBet; // refund
    }

    currentBet = 0;
    updateBetUI();
    enableBetting();
}

updateBetUI();