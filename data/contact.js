const menuToggle   = document.getElementById('menuToggle');
const mobilePanel  = document.getElementById('mobilePanel');
const searchToggle = document.getElementById('searchToggle');
const searchPop    = document.getElementById('searchPopover');
const searchInput  = document.getElementById('searchInput');
const searchClose  = document.getElementById('searchClose');
const searchSubmit = document.getElementById('searchSubmit');
const accountBtn = document.getElementById("accountBtn");
const accountPopup = document.getElementById("accountPopup");
const closePopup = document.getElementById("closePopup");
const closePopup2 = document.getElementById("closePopup2");
const loginForm = document.querySelector(".loginForm");
const registerForm = document.querySelector(".registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");


const openSearch = () => {
searchPop.classList.add('open');
searchToggle.setAttribute('aria-expanded','true');

setTimeout(()=> searchInput.focus(), 0);
};
const closeSearch = () => {
searchPop.classList.remove('open');
searchToggle.setAttribute('aria-expanded','false');
searchToggle.focus();
};

const openMenu = () => {
mobilePanel.classList.add('open');
menuToggle.setAttribute('aria-expanded','true');
};
const closeMenu = () => {
mobilePanel.classList.remove('open');
menuToggle.setAttribute('aria-expanded','false');
menuToggle.focus();
};


menuToggle.addEventListener('click', () => {
const isOpen = mobilePanel.classList.contains('open');
isOpen ? closeMenu() : openMenu();
});


searchToggle.addEventListener('click', () => {
const isOpen = searchPop.classList.contains('open');
isOpen ? closeSearch() : openSearch();
});


searchSubmit.addEventListener('click', () => {
const q = searchInput.value.trim();
if(!q){ searchInput.focus(); return; }
alert('Tìm: ' + q);
});


document.addEventListener('click', (e) => {
// Search
if (searchPop.classList.contains('open')) {
    const withinSearch = searchPop.contains(e.target) || searchToggle.contains(e.target);
    if (!withinSearch) closeSearch();
}
// Mobile
if (mobilePanel.classList.contains('open')) {
    const withinMenu = mobilePanel.contains(e.target) || menuToggle.contains(e.target);
    if (!withinMenu) closeMenu();
}
});


document.addEventListener('keydown', (e) => {

const tag = document.activeElement?.tagName?.toLowerCase();
const typing = tag === 'input' || tag === 'textarea';
if (e.key === '/' && !typing) {
    e.preventDefault();
    if (!searchPop.classList.contains('open')) openSearch();
}
if (e.key === 'Escape') {
    if (searchPop.classList.contains('open')) closeSearch();
    if (mobilePanel.classList.contains('open')) closeMenu();
}
});

// mobile
let lastW = window.innerWidth;
window.addEventListener('resize', () => {
const w = window.innerWidth;
if (w !== lastW) {
    closeSearch();
    if (w >= 980) closeMenu();
    lastW = w;
}
});


searchClose.addEventListener('click', closeSearch);

// login form
accountBtn.addEventListener("click", () => {
    accountPopup.style.display = "flex";
    loginForm.classList.add("active");      // hiện login
    registerForm.classList.remove("active"); // ẩn register
});

closePopup.addEventListener("click", () => {
    accountPopup.style.display = "none";
});

closePopup2.addEventListener("click", () => {
    accountPopup.style.display = "none";
});

showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");   // ẩn login
    registerForm.classList.add("active");   // hiện register
});

showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("active");      // hiện login
    registerForm.classList.remove("active");// ẩn register
});