async function Header() {
    const headerHTML = `
        <nav class="navbar" aria-label="Thanh điều hướng">
            <div class="logo">
            <a href="/" aria-label="Trang chủ">
                <i class="fa-solid fa-mug-saucer"></i>
                <span>Coffee Premium</span>
            </a>
            </div>

            <ul class="nav-links" role="menubar" aria-label="Liên kết chính">
                <li><a href="#" role="menuitem" aria-current="page">Trang chủ</a></li>
                <li><a href="#" role="menuitem">Giới thiệu</a></li>
                <li><a href="#" role="menuitem">Sản phẩm</a></li>
                <li><a href="#" role="menuitem">Tin tức</a></li>
                <li><a href="#" role="menuitem">Liên hệ</a></li>
            </ul>

            <div class="actions">
                <div class="search-wrap">
                    <button id="searchToggle" class="search-toggle" aria-haspopup="dialog" aria-expanded="false" aria-controls="searchPopover" title="Tìm kiếm ( / )">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                
                <button id="accountBtn" class="btn" type="button">
                    <i class="fa-regular fa-user"></i>
                    <span>Tài khoản</span>
                </button>

                <div id="accountPopup" class="popup">
                    <div class="popup-content">
                    <span id="closePopup" class="close">&times;</span>

                    <!-- Form Login -->
                    <form class="form login-form active">
                        <h2>Đăng nhập</h2>
                        <input type="text" placeholder="Tên đăng nhập">
                        <input type="password" placeholder="Mật khẩu">
                        <button type="submit">Đăng nhập</button>
                        <p>Chưa có tài khoản? <a href="#" id="showRegister">Đăng ký</a></p>
                    </form>

                    <!-- Form Register -->
                    <form class="form register-form">
                        <h2>Đăng ký</h2>
                        <input type="text" placeholder="Tên đầy đủ">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Mật khẩu">
                        <button type="submit">Đăng ký</button>
                        <p>Đã có tài khoản? <a href="#" id="showLogin">Đăng nhập</a></p>
                    </form>
                    </div>
                </div>

                <button class="btn cart" type="button" aria-label="Giỏ hàng">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="cart-count">0</span>
                </button>

                <button id="menuToggle" class="menu-toggle" aria-label="Mở menu" aria-expanded="false" aria-controls="mobilePanel">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>

        <div id="searchPopover" class="search-popover" role="dialog" aria-modal="true" aria-label="Tìm kiếm sản phẩm">
            <div class="search-row">
                <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                <input id="searchInput" class="search-input" type="text" placeholder="Tìm kiếm sản phẩm, bài viết..." />
                <span class="kbd">/</span>
                <div class="search-actions">
                    <button id="searchSubmit" class="btn" type="button">Tìm</button>
                    <button id="searchClose" class="search-close" type="button" aria-label="Đóng tìm kiếm">
                    <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobilePanel" class="mobile-panel" aria-label="Menu di động">
            <ul class="mobile-links">
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Sản phẩm</a></li>
                <li><a href="#">Tin tức</a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
            <div class="mobile-cta">
                <button class="btn" type="button">Đăng nhập</button>
                <button class="btn" type="button" style="background:#fff8f0">Đăng ký</button>
            </div>
        </div>
    `;
console.log(headerHTML);
const heads = document.getElementsByClassName("head-component");
    for(var i = 0 ; i < heads.length; i ++) {
        heads[i].innerHTML = headerHTML;
    }
}
Header();


const accountBtn = document.getElementById("accountBtn");
const accountPopup = document.getElementById("accountPopup");
const closePopup = document.getElementById("closePopup");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Mở popup mặc định ở login
    accountBtn.addEventListener("click", () => {
        accountPopup.style.display = "flex";
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    });

    // Đóng popup
    closePopup.addEventListener("click", () => {
        accountPopup.style.display = "none";
    });

    // Chuyển sang form Đăng ký
    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    });

    // Chuyển sang form Đăng nhập
    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
    });

    // Click ngoài popup thì tắt
    window.addEventListener("click", (e) => {
        if (e.target === accountPopup) {
            accountPopup.style.display = "none";
        }
});