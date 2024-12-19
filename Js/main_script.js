//Code Original(52 lignes)

function updateQuantity(item, operation) {
    let quantity = document.querySelector(`[data-item="${item}"]`);
    let total = document.querySelector('.total')
    let currentQuantity = parseInt(quantity.textContent);
    let currentTotal = parseInt(total.textContent);
    if (operation === 'plus') {
        quantity.textContent = currentQuantity + 1;
        if (item == 'basket'){
            total.textContent = currentTotal + 100;
        } else if (item == 'socks') {
            total.textContent = currentTotal + 20;
        } else if (item == 'bag') {
            total.textContent = currentTotal + 50;
        }
    } 
    else if (operation === 'minus') {
        quantity.textContent = currentQuantity - 1;
        if (item == 'basket'){
            total.textContent = currentTotal - 100;
        } else if (item == 'socks') {
            total.textContent = currentTotal - 20;
        } else if (item == 'bag') {
            total.textContent = currentTotal - 50;
        }
    }
    if (quantity.textContent < 0) {
        quantity.textContent = 0;
        }
    if (total.textContent < 0) {
        total.textContent = 0;
        }
}

function trash(item) {
    let quantity = document.querySelector(`[data-item="${item}"]`);
    let total = document.querySelector('.total')
    let currentQuantity = parseInt(quantity.textContent);
    let currentTotal = parseInt(total.textContent);
    if (item == 'basket') {
        total.textContent = currentTotal - (currentQuantity * 100);
    } else if (item == 'socks') {
        total.textContent = currentTotal - (currentQuantity * 20);
    } else if (item == 'bag') {
        total.textContent = currentTotal - (currentQuantity * 50);
    }
    quantity.textContent = 0
}

function like(item) {
    let heart = document.querySelector(`[data-item="${item}"]`);
    heart.classList.toggle('liked')
}