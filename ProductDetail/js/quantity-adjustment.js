const minusButton = document.querySelector('.js-minus-button');
const plusButton = document.querySelector('.js-plus-button');
let quantity = document.querySelector('.js-quantity-count');

// Add a className to a button to disable it functionality
const updateButtonStyle = () => {
    const quantityValue = parseInt(quantity.value);

    // Disable minus button when the quantity is 1
    if(quantityValue === 1) {
        minusButton.classList.add('inactive-button');
    } else {
        minusButton.classList.remove('inactive-button');
    }

    // Disable plus button when the quantity is 10
    if(quantityValue === 10) {
        plusButton.classList.add('inactive-button')
    } else {
        plusButton.classList.remove('inactive-button');
    }
};

// Handling minus button
minusButton.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.value);

    if(currentQuantity > 1) {
        quantity.value = currentQuantity - 1;
        updateButtonStyle();
    }
});

// Handling plus button
plusButton.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.value);

    if(currentQuantity < 10) {
        quantity.value = currentQuantity + 1;
        updateButtonStyle();
    }
});