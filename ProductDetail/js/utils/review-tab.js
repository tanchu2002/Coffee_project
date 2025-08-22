export function renderReviewsTab() {
    return `
        <div class="review-tab-details">
            <!-- Review overall container (Left side) -->
            <div class="review-overall-container">
                <div class="review-heading-container">
                        <p>Tổng quan đánh giá</p>
                </div>

                <div class="total-review-numbering">
                    <h1>4.8</h1>

                    <!-- Star icons -->
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>

                    <p>124 đánh giá</p>
                </div>

                <!-- Star chart container -->
                <div class="stars-rating-bar-container">
                    <div class="rating-row">
                        <span>5</span>

                        <i class="bi bi-star-fill overall-rating-star-icon"></i>

                        <div class="statistic-bar-container">
                            <div class="statistic-bar" style="width: 65%;"></div>
                        </div>

                        <p class="rating-percentage">65%</p>
                    </div>
                </div>

                <div class="stars-rating-bar-container">
                    <div class="rating-row">
                        <span>4</span>

                        <i class="bi bi-star-fill overall-rating-star-icon"></i>

                        <div class="statistic-bar-container">
                            <div class="statistic-bar" style="width: 25%;"></div>
                        </div>
                        
                        <p class="rating-percentage">25%</p>
                    </div>
                </div>

                <div class="stars-rating-bar-container">
                    <div class="rating-row">
                        <span>3</span>

                        <i class="bi bi-star-fill overall-rating-star-icon"></i>

                        <div class="statistic-bar-container">
                            <div class="statistic-bar" style="width: 7%;"></div>
                        </div>
                        
                        <p class="rating-percentage">7%</p>
                    </div>
                </div>

                <div class="stars-rating-bar-container">
                    <div class="rating-row">
                        <span>2</span>

                        <i class="bi bi-star-fill overall-rating-star-icon"></i>

                        <div class="statistic-bar-container">
                            <div class="statistic-bar" style="width: 2%;"></div>
                        </div>
                        
                        <p class="rating-percentage">2%</p>
                    </div>
                </div>

                <div class="stars-rating-bar-container">
                    <div class="rating-row">
                        <span>1</span>

                        <i class="bi bi-star-fill overall-rating-star-icon"></i>

                        <div class="statistic-bar-container">
                            <div class="statistic-bar" style="width: 1%;"></div>
                        </div>
                        
                        <p class="rating-percentage js-percentage">1%</p>
                    </div>
                </div>
            </div>

            <!-- Review comment container -->
            <div class="review-comments-container">

                <!-- Comment card -->
                <div class="comment-card-container">
                    <!-- User profile image -->
                    <div class="profile-image-container">
                        <img src="/ProductDetail/assets/images/reviewers/donald-trump.jpg" alt="User profile picture">
                    </div>

                    <!-- Comment content container -->
                    <div class="comment-content-container">
                        <!-- User name -->
                        <div class="user-name-badge">
                            <h4>Donald Trump</h4>

                            <span class="verified-badge">Đã xác minh</span>
                        </div>

                        <!-- Star icons -->
                        <div class="comment-rating-container">
                            <!-- Star container -->
                            <div>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>

                            <span>15/12/2024</span>
                        </div>

                        <!-- User comment -->
                        <p class="user-comment">
                            Cà phê rất ngon, hương vị đậm đà và thơm. Rang tươi, chất lượng tuyệt vời. Sẽ mua lại!
                        </p>
                    </div>
                </div>

                <!-- Comment card -->
                <div class="comment-card-container">
                    <!-- User profile image -->
                    <div class="profile-image-container">
                        <img src="/ProductDetail/assets/images/reviewers/rosie.jpg" alt="User profile picture">
                    </div>

                    <!-- Comment content container -->
                    <div class="comment-content-container">
                        <!-- User name -->
                        <div class="user-name-badge">
                            <h4>Rosie Blackpink</h4>

                            <span class="verified-badge">Đã xác minh</span>
                        </div>

                        <!-- Star icons -->
                        <div class="comment-rating-container">
                            <!-- Star container -->
                            <div>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>

                            <span>12/12/2024</span>
                        </div>

                        <!-- User comment -->
                        <p class="user-comment">
                            Cà phê khá ngon, hương vị nhẹ nhàng. Giao hàng nhanh, đóng gói cẩn thận.
                        </p>
                    </div>
                </div>

                <!-- Comment card -->
                <div class="comment-card-container">
                    <!-- User profile image -->
                    <div class="profile-image-container">
                        <img src="/ProductDetail/assets/images/reviewers/elon-musk.jpg" alt="User profile picture">

                    </div>

                    <!-- Comment content container -->
                    <div class="comment-content-container">
                        <!-- User name -->
                        <div class="user-name-badge">
                            <h4>Elon Musk</h4>

                            <span class="verified-badge">Đã xác minh</span>
                        </div>

                        <!-- Star icons -->
                        <div class="comment-rating-container">
                            <!-- Star container -->
                            <div>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>

                            <span>10/12/2024</span> 
                        </div>

                        <!-- User comment -->
                        <p class="user-comment">
                            Tuyệt vời! Đây là loại cà phê tôi đã tìm kiếm. Hương vị cân bằng, không quá đắng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
};