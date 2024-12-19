// Version simplifié avec moins de redondance(32 lignes)

const prices = {basket: 100, socks: 20, bag: 50};

function updateQuantity(item, operation) {
    let quantity = document.querySelector(`[data-item="${item}"]`);
    let total = document.querySelector('.total')
    let currentQuantity = parseInt(quantity.textContent);
    let currentTotal = parseInt(total.textContent);
    let price = prices[item];
    if (operation === 'plus') {
        quantity.textContent = Math.max(currentQuantity + 1);
        total.textContent = Math.max(currentTotal + price);
    } 
    else if (operation === 'minus') {
        quantity.textContent = Math.max(currentQuantity - 1, 0);
        total.textContent = Math.max(currentTotal - price, 0);
    }
}

function trash(item) {
    let quantity = document.querySelector(`[data-item="${item}"]`);
    let total = document.querySelector('.total')
    let currentQuantity = parseInt(quantity.textContent);
    let currentTotal = parseInt(total.textContent);
    let price = prices[item];
    total.textContent = currentTotal - (currentQuantity * price);
    quantity.textContent = 0
}

function like(item) {
    let heart = document.querySelector(`[data-item="${item}"]`);
    heart.classList.toggle('liked')
}