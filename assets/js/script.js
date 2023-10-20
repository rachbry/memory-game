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

        // Add click event listener to reveal whats on the card
        card.addEventListener("click", function() {
            card.classList.add("flip");
        })
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



// This is the bottom tag
});