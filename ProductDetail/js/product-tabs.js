// Importing HTML element
import { renderDescriptionTab } from './utils/detailed-description-tab.js';
import { renderSpecificationsTab } from './utils/specifications-tab.js';
import { renderReviewsTab } from './utils/review-tab.js';

document.addEventListener('DOMContentLoaded', () => {
    // Query required HTML element by className
    const descriptionButton = document.querySelector('.js-detailed-description-tab-button');
    const specificationsButton = document.querySelector('.js-specifications-tab-button');
    const reviewButton = document.querySelector('.js-review-tab-button');
    const tabContainer = document.querySelector('.product-tab-root');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Detailed description button
    descriptionButton.addEventListener('click', () => {
        tabContainer.innerHTML = renderDescriptionTab();
    });

    // Specifications button
    specificationsButton.addEventListener('click', () => {
        tabContainer.innerHTML = renderSpecificationsTab();
    });

    // Review button
    reviewButton.addEventListener('click', () => {

        tabContainer.innerHTML = renderReviewsTab();
    });

    tabButtons.forEach(clickedButton => {
        clickedButton.addEventListener('click', () => {
            tabButtons.forEach(button => {
                button.classList.remove('button-clicked');
            });

            clickedButton.classList.add('button-clicked');
        });
    });
});