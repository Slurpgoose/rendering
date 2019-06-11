
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    result = restaurants.map(element => {
        return createRestaurant(element)
    }).join("")
    return `
            <div class="restraunts">
            ${result}</div>
    `
}

function createRestaurant(restaurant) {
    price = createPriceStr(restaurant.priceRating)
    return `<div class="place"><h3>${restaurant.name}</h3><p>${restaurant.type}</p><h1>${price}</h1></div>`
}

function createPriceStr(rating) {
    var price = '';
    for(i = 0; i < rating; i++) {
        price += '$';
    }
    return price
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}