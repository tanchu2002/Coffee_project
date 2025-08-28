document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    const subImages = document.querySelectorAll('.sub-image');

    if(subImages.length > 0) {
        subImages[0].classList.add('selected-sub-image');
    };

    subImages.forEach(subImage => {
        subImage.addEventListener('click', () => {
            subImages.forEach(selectedIMG => {
                selectedIMG.classList.remove('selected-sub-image');
            });

            subImage.classList.add('selected-sub-image');

            mainImage.src = subImage.src;
        });
    });
});