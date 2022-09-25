function flip() {
    $('.card').toggleClass('flipped');
}

// Generate a random number 0:2986
function draw(data) {
    var rng = Math.floor(Math.random() * 2987); // There are 2987 Words Now
    document.getElementById('card_f').innerHTML = data[rng].word;
    document.getElementById('card_b').innerHTML = data[rng].definition;
}




