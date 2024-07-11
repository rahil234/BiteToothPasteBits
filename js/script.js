window.addEventListener('scroll', () => {
    if (window.scrollY < 10) {
        document.querySelector("header").style.backgroundColor = "transparent"
    }
    else if (window.scrollY > 10) {
        document.querySelector("header").style.backgroundColor = "white"
    }
});

var card_no = 0;
var translate_pos = -20;

const scrollableDiv = document.querySelector('.scrollable_div');

// Function to duplicate cards for looping effect
function duplicateCards(card_no) {
    const cards = scrollableDiv.querySelectorAll('.card');
    const firstCard = cards[card_no].cloneNode(true); // Clone the first card
    scrollableDiv.appendChild(firstCard); // Append the cloned card to the end
}


document.getElementById("scroll_element").style.transform = `translateX(${translate_pos}%)`;

function translateDiv(pos) {
    document.getElementById("scroll_element").style.transform = `translateX(${pos}%)`;
}

// Timer function to append cards every 5 seconds
function animateCard() {
    setTimeout(function () {
        translate_pos -= 48;
        translateDiv(translate_pos);
        duplicateCards(card_no);
        card_no++;
        animateCard();
    }, 5000);
}

// Start the timer initially
animateCard();

