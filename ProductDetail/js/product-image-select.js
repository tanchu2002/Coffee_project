let mainImage = document.getElementsByClassName('js-main-image');
let subImages = document.querySelectorAll('.js-image-selector');

subImages.forEach(subImage => {
    subImage.addEventListener('click', () => {
        mainImage.src = subImage.src;
    });
});