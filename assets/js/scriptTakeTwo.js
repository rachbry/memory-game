document.addEventListener("DOMContentLoaded", function () {
    const cardIcons = [
        "fa fa-heart",
        "fas fa-star",
        "fas fa-music",
        "fa-solid fa-cake-candles",
        "fa-solid fa-snowman",
        "fa-solid fa-puzzle-piece",
        "fa-solid fa-ice-cream",
        "fa-solid fa-gamepad",
        "fa-solid fa-dog",
        "fa-solid fa-ghost",
        "fa-solid fa-dragon",
        "fa-solid fa-hippo",
        "fa-solid fa-fish",
        "fa-solid fa-paw",
        "fa-solid fa-spider",
        "fa-solid fa-frog",
        "fa-solid fa-cat",
        "fa-solid fa-shapes"
    ];
    let gameArray = [];
    let flippedCards = [];
    let matchedPairs = 0;

    gameArray = cardIcons.concat(cardIcons);
    gameArray.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < gameArray.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = gameArray[i];
        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    }

    function handleCardClick(event) {
        const clickedCard = event.target;

        // Ignore click if the card is already flipped, matched, or two cards are already flipped
        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched') || flippedCards.length >= 2) {
            return;
        }

        // Show the card
        const cardIcon = clickedCard.dataset.icon;
        // use Font Awesome icons to set the HTML of the card
        clickedCard.innerHTML = `<i class="${cardIcon}"></i>`;
        clickedCard.classList.add('flipped');

        // Add card to flippedCards array
        flippedCards.push(clickedCard);

        // Check for match
        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.dataset.icon === secondCard.dataset.icon) {
                // Cards match
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                matchedPairs++;

                // Reset flippedCards array
                flippedCards = [];

                // Check for game completion
                if (matchedPairs === cardIcons.length) {
                    alert('You won!');
                }
            } else {
                // Cards do not match, flip them back after a short delay
                setTimeout(() => {
                    firstCard.innerHTML = ''; // Remove the icon
                    secondCard.innerHTML = ''; // Remove the icon
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }
});

