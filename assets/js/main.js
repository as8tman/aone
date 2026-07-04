// Global Main JavaScript for Aone Company

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeaderScroll();
  initMobileMenu();
  initRfqCart();
  highlightActiveNav();
});

/* ==========================================================================
   Bilingual System (KO / EN)
   ========================================================================== */
function initLanguage() {
  const DEFAULT_LANG = 'ko'; // Default to Korean as reference site, but let users switch
  let currentLang = localStorage.getItem('aone_lang');

  if (!currentLang) {
    // Detect system browser language
    const browserLang = navigator.language || navigator.userLanguage;
    currentLang = browserLang.startsWith('ko') ? 'ko' : 'en';
  }

  setLanguage(currentLang);

  // Set up event listeners for lang switch buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang-btn');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  document.body.className = `lang-${lang}`;
  localStorage.setItem('aone_lang', lang);

  // Update active states on buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang-btn') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Custom events to notify other modules (like product display) that language changed
  const event = new CustomEvent('languageChanged', { detail: { lang } });
  document.dispatchEvent(event);
}

/* ==========================================================================
   Header Scroll & Navigation States
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('header.site-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Run initially
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Change icon representation if using text/icon
    const icon = toggle.querySelector('i');
    if (icon) {
      if (nav.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  });
}

function highlightActiveNav() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  
  const navItems = document.querySelectorAll('.main-nav li');
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (!link) return;
    const href = link.getAttribute('href');
    
    if (href === page || (page === '' && href === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/* ==========================================================================
   RFQ Shopping Cart Core Logic
   ========================================================================== */
function initRfqCart() {
  updateCartBadges();
  
  // Set up global click event to redirect to RFQ page
  const badgeBtn = document.querySelector('.rfq-badge-btn');
  if (badgeBtn) {
    badgeBtn.addEventListener('click', () => {
      window.location.href = 'rfq.html';
    });
  }
}

// Get cart array from storage
window.getAoneCart = function() {
  try {
    const cart = localStorage.getItem('aone_rfq_cart');
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error('Error loading RFQ cart:', e);
    return [];
  }
};

// Save cart array to storage
window.saveAoneCart = function(cart) {
  try {
    localStorage.setItem('aone_rfq_cart', JSON.stringify(cart));
    updateCartBadges();
    
    // Dispatch cart change event
    const event = new CustomEvent('cartUpdated', { detail: { cart } });
    document.dispatchEvent(event);
  } catch (e) {
    console.error('Error saving RFQ cart:', e);
  }
};

// Add item to RFQ cart
window.addAoneCartItem = function(item) {
  let cart = window.getAoneCart();
  const existingIdx = cart.findIndex(c => c.id === item.id);

  if (existingIdx > -1) {
    cart[existingIdx].qty = parseInt(cart[existingIdx].qty) + (parseInt(item.qty) || 1);
  } else {
    cart.push({
      id: item.id,
      model: item.model,
      brand: item.brand,
      category: item.category,
      qty: parseInt(item.qty) || 1,
      image: item.image || ''
    });
  }
  
  window.saveAoneCart(cart);
  showToast(item.model);
};

// Remove item from RFQ cart
window.removeAoneCartItem = function(id) {
  let cart = window.getAoneCart();
  cart = cart.filter(item => item.id !== id);
  window.saveAoneCart(cart);
};

// Update cart quantity
window.updateAoneCartItemQty = function(id, qty) {
  let cart = window.getAoneCart();
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    cart[idx].qty = Math.max(1, parseInt(qty) || 1);
    window.saveAoneCart(cart);
  }
};

// Clear all cart items
window.clearAoneCart = function() {
  window.saveAoneCart([]);
};

// Update all cart count badges in document
function updateCartBadges() {
  const badges = document.querySelectorAll('.rfq-count');
  const cart = window.getAoneCart();
  const totalItems = cart.length; // counts unique parts. Alternatively sum(qty)

  badges.forEach(badge => {
    badge.textContent = totalItems;
    if (totalItems === 0) {
      badge.style.display = 'none';
    } else {
      badge.style.display = 'flex';
    }
  });
}

// Simple dynamic Toast notification
function showToast(partName) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: rgba(15, 22, 38, 0.95);
    border: 1px solid rgba(59, 130, 246, 0.4);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 10px rgba(59, 130, 246, 0.2);
    backdrop-filter: blur(10px);
    color: #f8fafc;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    pointer-events: auto;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `;

  const isKo = document.body.classList.contains('lang-ko');
  const text = isKo 
    ? `<strong>${partName}</strong> 항목이 RFQ 리스트에 추가되었습니다.` 
    : `Added <strong>${partName}</strong> to your RFQ list.`;

  toast.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> <span>${text}</span>`;
  container.appendChild(toast);

  // Trigger reflow & show
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);

  // Hide & remove after delay
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
