const cartButton = document.querySelector('.js-add-to-cart-button');
const cartIcon = document.querySelector('.cart-icon');

const screenChange = () => {
    if(window.innerWidth > 600) {
        cartButton.addEventListener('mouseenter', () => {
            cartIcon.classList.add('cart-icon-animation');
        });

        cartButton.addEventListener('mouseleave', () => {
            cartIcon.classList.remove('cart-icon-animation');
        });    
    } else {
        cartIcon.classList.remove('cart-icon-animation');
    }
};

screenChange();