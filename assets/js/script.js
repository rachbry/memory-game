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

    const gameBoard = document.querySelector("#game-board");

    gameCards = cardIcons.concat(cardIcons);
    shuffleArray(gameCards);

    gameCards.forEach(gameCard => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.card = gameCard;

        const front = document.createElement('div');
        front.classList.add('front');

        const icon = document.createElement("i");
        icon.className = "fas fa-question";

        const back = document.createElement('div');
        back.classList.add('back');

        front.appendChild(icon);
        card.appendChild(front);
        card.appendChild(back);
        gameBoard.appendChild(card);


        card.addEventListener("click", function () {
            const icon = card.querySelector(".front i");
            if (!card.classList.contains("flipped")) {
                card.classList.add("flipped");
                icon.className = gameCard;
            } else {
                card.classList.remove("flipped");
                icon.className = "fas fa-question";
            }
        });

    card.addEventListener("click", handleCardClick);
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function handleCardClick(event) {
        const clickedCard = event.currentTarget;

        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }
        // Trying to troubleshoot
        const cardElement = document.querySelector('.card');
        console.log(cardElement.classList);

        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.dataset.card === secondCard.dataset.card) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                matchedPairs++;
                // reset flipped card
                flippedCards = [];

                if (matchedPairs === cardIcons.length) {
                    alert('Congratulations! You won the game.');
                }
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    // trying to debug
                    console.log("Timeout has passed")
                    flippedCards = [];
                }, 1000);
            }
        }
    }

});
