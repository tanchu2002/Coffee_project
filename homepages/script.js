/* ===========================
   Coffee Premium — Home JS
   Tác vụ:
   1) About carousel (Swiper): auto 3s, vuốt, dot, pause on hover
   2) Header effect khi scroll
   3) Smooth scroll cho anchor nội trang
   4) Toast “đã thêm vào giỏ” cho nút trong card sản phẩm
   5) Lazy image: thêm class 'loaded' khi vào viewport
   6) Tôn trọng prefers-reduced-motion
   =========================== */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initSmoothScroll();
    initAboutCarousel();
    initAddToCartToasts();
    initLazyEnhance();
  });

  /* 1) ABOUT CAROUSEL */
  function initAboutCarousel() {
    const el = $('.about-media.swiper');
    if (!el || typeof Swiper === 'undefined') return;

    // Nếu người dùng hạn chế chuyển động: tắt autoplay
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const swiper = new Swiper(el, {
      loop: true,
      speed: 600,
      autoplay: reduceMotion
        ? false
        : {
            delay: 3000,          // 3 giây
            disableOnInteraction: false, // user vuốt xong vẫn tự chạy tiếp
          },
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true,
      },
      // vuốt mượt
      touchReleaseOnEdges: true,
      grabCursor: true,
    });

    // Pause autoplay khi hover, resume khi rời
    // (desktop thôi; trên mobile không có hover)
    el.addEventListener('mouseenter', () => {
      if (swiper.autoplay) swiper.autoplay.stop();
    });
    el.addEventListener('mouseleave', () => {
      if (swiper.autoplay) swiper.autoplay.start();
    });
  }

  /* 2) HEADER EFFECT ON SCROLL */
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      header.classList.toggle('scrolled', scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* 3) SMOOTH SCROLL CHO LINK DẠNG # */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        const target = id && id.length > 1 ? document.querySelector(id) : null;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* 4) TOAST “ĐÃ THÊM VÀO GIỎ” */
  function initAddToCartToasts() {
    const buttons = $$('.card .btn.btn-primary');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const name = card ? card.querySelector('h3, .h6')?.textContent?.trim() : 'Sản phẩm';
        showToast(`Đã thêm “${name || 'sản phẩm'}” vào giỏ hàng`);
      });
    });
  }

  function showToast(message) {
    let holder = $('#toast-holder');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = 'toast-holder';
      holder.style.position = 'fixed';
      holder.style.right = '16px';
      holder.style.bottom = '16px';
      holder.style.zIndex = '9999';
      document.body.appendChild(holder);
    }
    const t = document.createElement('div');
    t.textContent = message;
    Object.assign(t.style, {
      background: '#4B2E23',
      color: '#fff',
      padding: '10px 14px',
      marginTop: '10px',
      borderRadius: '10px',
      boxShadow: '0 10px 24px rgba(0,0,0,.25)',
      fontWeight: '600',
      maxWidth: '320px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      transform: 'translateY(10px)',
      opacity: '0',
      transition: 'transform .2s ease, opacity .2s ease',
    });
    holder.appendChild(t);
    requestAnimationFrame(() => {
      t.style.opacity = '1';
      t.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      setTimeout(() => t.remove(), 200);
    }, 2200);
  }

  /* 5) LAZY ENHANCE: thêm class 'loaded' cho ảnh khi xuất hiện để bạn CSS fade-in nếu muốn */
  function initLazyEnhance() {
    const imgs = $$('img');
    if (!('IntersectionObserver' in window) || !imgs.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('loaded');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '100px' });

    imgs.forEach(img => io.observe(img));
  }
})();
