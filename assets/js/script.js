document.addEventListener("DOMContentLoaded", function () {
    const cardIcons = [
        "fa fa-heart",
        "fas fa-star",
        "fas fa-music",
        "fas fa-bicycle",
        "fas fa-paint-brush",
        "fas fa-globe",
      ];
    let gameCards = [];
    let flippedCards = [];
    let matchedPairs = 0;

    // Populating the game array .concat(cardIcons) duplicates the array
    // 2nd line shuffles it
    gameCards = cardIcons.concat(cardIcons);
    shuffleArray(gameCards);

    gameCards.forEach(gameCard => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.card = gameCard;

        const front = document.createElement('div');
        front.classList.add('front');

        const icon = document.createElement("i");
        icon.className = "fas fa-question"; // Initial blank card icon

        const back = document.createElement('div');
        back.classList.add('back');

        front.appendChild(icon);
        card.appendChild(front);
        card.appendChild(back);
        gameBoard.appendChild(card);

// Add click event listener to reveal what's on the card or flip it back
card.addEventListener("click", function () {
    const icon = card.querySelector(".front i"); // Find the icon within the card

    if (!card.classList.contains("flip")) {
        card.classList.add("flip");
        icon.className = gameCard; // Set the icon when the card is flipped
    } else {
        card.classList.remove("flip");
        icon.className = "fas fa-question"; // Set the initial blank card icon when unflipped
    }
});
});

    /**
     * Shuffle the Array
     */
    function shuffleArray(array) {
        for (let i = array.length -1; i >0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    function handleCardClick(event) {
        const clickedCard = event.target;
    
        if (clickedCard.classList.contains('flip') || clickedCard.classList.contains('matched')) {
            return; // Do nothing if the card is already flipped or matched
        }
    
        // Add the logic to handle the click event here
        // You can use the clickedCard variable to access the clicked card's properties
    
        // Example logic to check if two flipped cards match
        flippedCards.push(clickedCard);
        if (flippedCards.length === 2) {
            const [card1, card2] = flippedCards;
            if (card1.dataset.card === card2.dataset.card) {
                // Cards match, mark them as "matched"
                card1.classList.add('matched');
                card2.classList.add('matched');
                flippedCards = [];
    
                // Increment the matchedPairs count and check if the game is won
                matchedPairs++;
                if (matchedPairs === cardIcons.length / 2) {
                    // Game won
                    alert('Congratulations! You won the game.');
                }
            } else {
                // Cards do not match, flip them back after a brief delay
                setTimeout(() => {
                    card1.classList.remove('flip');
                    card2.classList.remove('flip');
                    flippedCards = [];
                }, 1000); // Delay for 1 second
            }
        }
    }

    



// This is the bottom tag
});