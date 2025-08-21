import { renderDescriptionTab } from './utils/detailed-description-tab.js';
import { renderSpecificationsTab } from './utils/specifications-tab.js';
import { renderReviewsTab } from './utils/review-tab.js';

document.addEventListener('DOMContentLoaded', () => {
    const descriptionButton = document.querySelector('.js-detailed-description-tab-button');
    const specificationsButton = document.querySelector('.js-specifications-tab-button');
    const reviewButton = document.querySelector('.js-review-tab-button');
    const tabContainer = document.querySelector('.product-tab-root');

    descriptionButton.addEventListener('click', () => {
        tabContainer.innerHTML = renderDescriptionTab();
    });

    specificationsButton.addEventListener('click', () => {
        tabContainer.innerHTML = renderSpecificationsTab();
    });

    reviewButton.addEventListener('click', () => {
        tabContainer.innerHTML = renderReviewsTab();
    });
});