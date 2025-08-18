export default function Header() {
    const headerHTML = `
        <header class="header">
            <nav class="navbar">
                <div class="logo">
                    <a href="#">Coffee Premium</a>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
                <div class="actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm sản phẩm...">
                    </div>
                    <button class="btn">
                        <i class="fa-regular fa-user"></i>
                        Tài khoản
                    </button>
                    <button class="btn">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">2</span>
                    </button>
                </div>
            </nav>  
        </header>
    `;

    return headerHTML;
};

document.addEventListener('DOMContentLoaded', () => {
    const headerComponent = document.getElementById('header-component');

    if(headerComponent) {
        headerComponent.innerHTML = Header();
    }
});