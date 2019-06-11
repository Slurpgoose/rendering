
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    cards = pokerHand.map(element => {
        //alert(element.value)
        return createCard(element);
    }).join("");
    return `
        <div class="text-center mt-5">
        <div class="card-holder">${cards}</div>
        </div>
    `
}

function createCard(card){
    var card_img = card.value + card.suit + ".png";
    return `<div class="card"><img src="cards/${card_img}"></img></div>`
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}