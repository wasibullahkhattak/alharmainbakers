// ===== Al-Harmain Bakers - Application Logic =====

// ===== Product Data =====
const products = [
  // Breads
  {
    id: 1,
    name: "Tandoori Naan",
    category: "bread",
    price: 30,
    badge: "Bestseller",
    description: "Freshly baked soft tandoori naan, perfect with any curry.",
    emoji: "🫓"
  },
  {
    id: 2,
    name: "Roghni Naan",
    category: "bread",
    price: 50,
    badge: "",
    description: "Buttery, rich naan topped with sesame seeds.",
    emoji: "🍞"
  },
  {
    id: 3,
    name: "Kulcha",
    category: "bread",
    price: 40,
    badge: "",
    description: "Soft leavened bread, lightly sweetened and baked to perfection.",
    emoji: "🫓"
  },
  {
    id: 4,
    name: "Sheermal",
    category: "bread",
    price: 80,
    badge: "Premium",
    description: "Traditional saffron-infused sweet bread, a D.I. Khan specialty.",
    emoji: "🍞"
  },
  {
    id: 5,
    name: "Double Roti (Bread Loaf)",
    category: "bread",
    price: 120,
    badge: "",
    description: "Classic fresh white bread loaf, soft and fluffy.",
    emoji: "🍞"
  },
  {
    id: 6,
    name: "Whole Wheat Bread",
    category: "bread",
    price: 140,
    badge: "Healthy",
    description: "Nutritious whole wheat bread for health-conscious customers.",
    emoji: "🥖"
  },

  // Cakes
  {
    id: 7,
    name: "Chocolate Fudge Cake",
    category: "cake",
    price: 1800,
    badge: "Popular",
    description: "Rich, moist chocolate cake with layers of fudge frosting.",
    emoji: "🎂"
  },
  {
    id: 8,
    name: "Vanilla Cream Cake",
    category: "cake",
    price: 1500,
    badge: "",
    description: "Light vanilla sponge with whipped cream and fresh design.",
    emoji: "🍰"
  },
  {
    id: 9,
    name: "Pineapple Cake",
    category: "cake",
    price: 1600,
    badge: "",
    description: "Tropical pineapple flavored cake with cream frosting.",
    emoji: "🍰"
  },
  {
    id: 10,
    name: "Red Velvet Cake",
    category: "cake",
    price: 2200,
    badge: "Premium",
    description: "Luxurious red velvet cake with cream cheese frosting.",
    emoji: "🎂"
  },
  {
    id: 11,
    name: "Custom Wedding Cake",
    category: "cake",
    price: 5000,
    badge: "Custom",
    description: "Multi-tier customized wedding cake, designed to your vision.",
    emoji: "🎂"
  },
  {
    id: 12,
    name: "Black Forest Cake",
    category: "cake",
    price: 2000,
    badge: "",
    description: "Classic black forest with cherries, cream, and chocolate shavings.",
    emoji: "🍰"
  },

  // Pastries
  {
    id: 13,
    name: "Chicken Patties",
    category: "pastry",
    price: 80,
    badge: "Bestseller",
    description: "Flaky puff pastry filled with spiced chicken.",
    emoji: "🥟"
  },
  {
    id: 14,
    name: "Vegetable Roll",
    category: "pastry",
    price: 60,
    badge: "",
    description: "Crispy roll stuffed with seasoned vegetables.",
    emoji: "🌯"
  },
  {
    id: 15,
    name: "Cream Roll",
    category: "pastry",
    price: 70,
    badge: "",
    description: "Light pastry filled with sweet vanilla cream.",
    emoji: "🥐"
  },
  {
    id: 16,
    name: "Chicken Samosa",
    category: "pastry",
    price: 50,
    badge: "",
    description: "Golden fried samosa with spicy chicken filling.",
    emoji: "🔺"
  },
  {
    id: 17,
    name: "Pizza Slice",
    category: "pastry",
    price: 150,
    badge: "New",
    description: "Cheesy pizza slice with fresh toppings and tangy sauce.",
    emoji: "🍕"
  },
  {
    id: 18,
    name: "Chicken Burger",
    category: "pastry",
    price: 200,
    badge: "",
    description: "Juicy chicken burger with fresh vegetables and special sauce.",
    emoji: "🍔"
  },

  // Cookies & Biscuits
  {
    id: 19,
    name: "Zeera Biscuit",
    category: "cookie",
    price: 300,
    badge: "Traditional",
    description: "Traditional cumin-flavored biscuits (per kg).",
    emoji: "🍪"
  },
  {
    id: 20,
    name: "Nan Khatai",
    category: "cookie",
    price: 400,
    badge: "Bestseller",
    description: "Melt-in-mouth traditional shortbread cookies (per kg).",
    emoji: "🍪"
  },
  {
    id: 21,
    name: "Chocolate Chip Cookies",
    category: "cookie",
    price: 500,
    badge: "",
    description: "Crispy cookies loaded with chocolate chips (per kg).",
    emoji: "🍪"
  },
  {
    id: 22,
    name: "Rusk (Toast)",
    category: "cookie",
    price: 350,
    badge: "Popular",
    description: "Crunchy twice-baked rusk, perfect with chai (per kg).",
    emoji: "🥪"
  },
  {
    id: 23,
    name: "Cake Rusk",
    category: "cookie",
    price: 450,
    badge: "",
    description: "Sweet cake rusk with a delicate crunch (per kg).",
    emoji: "🥪"
  },

  // Traditional
  {
    id: 24,
    name: "Sohan Halwa",
    category: "traditional",
    price: 800,
    badge: "Signature",
    description: "Rich, traditional Sohan Halwa made with pure ghee (per kg).",
    emoji: "🍮"
  },
  {
    id: 25,
    name: "Jalebi",
    category: "traditional",
    price: 400,
    badge: "Fresh",
    description: "Crispy, syrupy jalebi made fresh every day (per kg).",
    emoji: "🥨"
  },
  {
    id: 26,
    name: "Gulab Jamun",
    category: "traditional",
    price: 600,
    badge: "",
    description: "Soft, spongy gulab jamun soaked in rose-scented syrup (per kg).",
    emoji: "🟤"
  },
  {
    id: 27,
    name: "Barfi",
    category: "traditional",
    price: 700,
    badge: "",
    description: "Traditional milk barfi with pistachios and silver leaf (per kg).",
    emoji: "🍬"
  },
  {
    id: 28,
    name: "Kheer",
    category: "traditional",
    price: 250,
    badge: "",
    description: "Creamy rice pudding with cardamom and nuts (per serving).",
    emoji: "🍚"
  },
  {
    id: 29,
    name: "Laddu",
    category: "traditional",
    price: 500,
    badge: "Popular",
    description: "Golden besan laddu made with pure desi ghee (per kg).",
    emoji: "🟡"
  },
  
  // Super Store - Groceries
  {
    id: 30,
    name: "Basmati Rice (5kg)",
    category: "grocery",
    price: 1800,
    badge: "Premium",
    description: "High-quality, long-grain basmati rice.",
    emoji: "🍚"
  },
  {
    id: 31,
    name: "Cooking Oil (1 Litre)",
    category: "grocery",
    price: 550,
    badge: "",
    description: "Pure and healthy cooking oil.",
    emoji: "🍾"
  },
  {
    id: 32,
    name: "Wheat Flour (10kg)",
    category: "grocery",
    price: 1400,
    badge: "Essential",
    description: "Finely milled whole wheat flour (Atta).",
    emoji: "🌾"
  },
  
  // Super Store - Beverages
  {
    id: 33,
    name: "Coca Cola (1.5 Litre)",
    category: "beverage",
    price: 150,
    badge: "",
    description: "Refreshing cold drink.",
    emoji: "🥤"
  },
  {
    id: 34,
    name: "Mango Juice (1 Litre)",
    category: "beverage",
    price: 250,
    badge: "Popular",
    description: "Pure mango juice.",
    emoji: "🧃"
  },
  
  // Super Store - Dairy
  {
    id: 35,
    name: "Fresh Milk (1 Litre)",
    category: "dairy",
    price: 200,
    badge: "Fresh",
    description: "Farm fresh milk delivered daily.",
    emoji: "🥛"
  },
  {
    id: 36,
    name: "Yogurt (1 kg)",
    category: "dairy",
    price: 220,
    badge: "",
    description: "Thick and creamy yogurt.",
    emoji: "🥣"
  },

  // Super Store - Snacks
  {
    id: 37,
    name: "Lays Chips (Large)",
    category: "snack",
    price: 100,
    badge: "",
    description: "Classic potato chips.",
    emoji: "🥔"
  },
  
  // Super Store - Household
  {
    id: 38,
    name: "Laundry Detergent (1 kg)",
    category: "household",
    price: 450,
    badge: "",
    description: "Powerful stain removing detergent.",
    emoji: "🧼"
  },
  
  // Super Store - Frozen Foods
  {
    id: 39,
    name: "Frozen Chicken Nuggets",
    category: "frozen",
    price: 850,
    badge: "",
    description: "Crispy chicken nuggets, ready to fry.",
    emoji: "🍗"
  }
];

// ===== Cart State =====
let cart = JSON.parse(localStorage.getItem('alharmain_cart')) || [];

// ===== DOM Elements =====
const menuGrid = document.getElementById('menuGrid');
const storeGrid = document.getElementById('storeGrid');
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutCancel = document.getElementById('checkoutCancel');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummary = document.getElementById('checkoutSummary');
const checkoutFormView = document.getElementById('checkoutFormView');
const checkoutSuccessView = document.getElementById('checkoutSuccessView');
const checkoutDone = document.getElementById('checkoutDone');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const scrollTop = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');

// ===== Render Products =====
const bakeryCategories = ['bread', 'cake', 'pastry', 'cookie', 'traditional'];
const storeCategories = ['grocery', 'beverage', 'dairy', 'snack', 'household', 'frozen'];

function renderProducts(category = 'all', section = 'all') {
  if (section === 'bakery' || section === 'all') {
     const bakeryItems = category === 'all' 
       ? products.filter(p => bakeryCategories.includes(p.category))
       : products.filter(p => p.category === category && bakeryCategories.includes(p.category));
       
     if (menuGrid) {
       menuGrid.innerHTML = bakeryItems.map((product, index) => generateProductHTML(product, index)).join('');
     }
  }
  
  if (section === 'store' || section === 'all') {
     const storeItems = category === 'all' 
       ? products.filter(p => storeCategories.includes(p.category))
       : products.filter(p => p.category === category && storeCategories.includes(p.category));
       
     if (storeGrid) {
       storeGrid.innerHTML = storeItems.map((product, index) => generateProductHTML(product, index)).join('');
     }
  }
  
  // Trigger scroll animations for new elements
  setTimeout(observeElements, 100);
}

function generateProductHTML(product, index) {
  return `
    <div class="product-card animate-on-scroll" data-category="${product.category}" style="animation-delay: ${index * 0.05}s">
      <div class="product-card-image">
        <img src="${generateProductImage(product)}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-card-badge">${product.badge}</div>` : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${getCategoryLabel(product.category)}</div>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-desc">${product.description}</p>
        <div class="product-card-footer">
          <div class="product-card-price">
            <span class="currency">Rs. </span>${product.price.toLocaleString()}
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to cart" id="addBtn${product.id}">
            +
          </button>
        </div>
      </div>
    </div>
  `;
}

function generateProductImage(product) {
  // Use real images per category where available
  const categoryImages = {
    bread: 'img_bread.png',
    cake: 'img_cake.png',
    pastry: 'img_pastry.png',
    cookie: 'img_cookie.png',
    traditional: 'img_cookie.png'
  };
  
  if (categoryImages[product.category]) {
    return categoryImages[product.category];
  }
  
  // Fallback SVG for super store items or missing categories
  const colors = {
    grocery: ['%234CAF50', '%23388E3C'],
    beverage: ['%232196F3', '%231976D2'],
    dairy: ['%2300BCD4', '%230097A7'],
    snack: ['%23FFC107', '%23FFA000'],
    household: ['%239C27B0', '%237B1FA2'],
    frozen: ['%23607D8B', '%23455A64']
  };
  
  const [c1, c2] = colors[product.category] || ['%239E9E9E', '%23757575'];
  
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g${product.id}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${c1}'/%3E%3Cstop offset='100%25' style='stop-color:${c2}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g${product.id})'/%3E%3Ctext x='200' y='140' text-anchor='middle' font-size='70'%3E${product.emoji}%3C/text%3E%3Ctext x='200' y='210' text-anchor='middle' font-family='Georgia' font-size='18' fill='white' opacity='0.9'%3E${encodeURIComponent(product.name)}%3C/text%3E%3Ctext x='200' y='250' text-anchor='middle' font-family='sans-serif' font-size='13' fill='white' opacity='0.6'%3EAl-Harmain Store%3C/text%3E%3C/svg%3E`;
}

function getCategoryLabel(cat) {
  const labels = {
    bread: '🫓 Breads',
    cake: '🎂 Cakes',
    pastry: '🥐 Pastries',
    cookie: '🍪 Cookies & Biscuits',
    traditional: '🍮 Traditional Sweets',
    grocery: '🛒 Groceries',
    beverage: '🥤 Beverages',
    dairy: '🥛 Dairy',
    snack: '🍫 Snacks',
    household: '🧼 Household',
    frozen: '❄️ Frozen Foods'
  };
  return labels[cat] || cat;
}

// ===== Category Filtering =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const section = e.target.dataset.section;
    // Remove active class only from buttons in the SAME section
    if (section) {
      document.querySelectorAll(`.filter-btn[data-section="${section}"]`).forEach(b => b.classList.remove('active'));
    } else {
      // Fallback if data-section is missing
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');
    
    renderProducts(btn.dataset.category, section);
  });
});

// ===== Cart Functions =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart!`);
  
  // Button animation
  const btn = document.getElementById(`addBtn${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '+';
    }, 1000);
  }
  
  // Badge bounce
  cartBadge.classList.add('bounce');
  setTimeout(() => cartBadge.classList.remove('bounce'), 400);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('alharmain_cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();
  
  // Update badge
  cartBadge.textContent = count;
  
  // Update cart items
  if (count === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    cartItems.innerHTML = '';
    cartItems.appendChild(cartEmpty);
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${generateProductImage(item)}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)" aria-label="Decrease quantity">−</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">🗑</button>
      </div>
    `).join('');
    
    cartSubtotal.textContent = `Rs. ${total.toLocaleString()}`;
    cartTotal.textContent = `Rs. ${total.toLocaleString()}`;
  }
}

// ===== Cart Sidebar Toggle =====
function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ===== Checkout =====
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  
  closeCart();
  
  // Populate order summary
  const summaryHTML = `
    <h4>Order Summary</h4>
    ${cart.map(item => `
      <div class="checkout-item">
        <div>
          <span class="checkout-item-name">${item.name}</span>
          <span class="checkout-item-qty"> × ${item.qty}</span>
        </div>
        <span class="checkout-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
      </div>
    `).join('')}
    <div class="checkout-total-row">
      <span>Total</span>
      <span>Rs. ${getCartTotal().toLocaleString()}</span>
    </div>
  `;
  checkoutSummary.innerHTML = summaryHTML;
  
  checkoutFormView.style.display = 'block';
  checkoutSuccessView.style.display = 'none';
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

checkoutCancel.addEventListener('click', () => {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
});

checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const notes = document.getElementById('checkoutNotes').value.trim();
  
  if (!name || !phone || !address) {
    showToast('Please fill in all required fields!');
    return;
  }
  
  // Build WhatsApp message
  let message = `🛒 *New Order - Al-Harmain Bakers*\n\n`;
  message += `👤 *Customer:* ${name}\n`;
  message += `📞 *Phone:* ${phone}\n`;
  message += `📍 *Address:* ${address}\n`;
  if (notes) message += `📝 *Notes:* ${notes}\n`;
  message += `\n━━━━━━━━━━━━━━━━\n`;
  message += `📋 *Order Details:*\n\n`;
  
  cart.forEach(item => {
    message += `• ${item.name} × ${item.qty} = Rs. ${(item.price * item.qty).toLocaleString()}\n`;
  });
  
  message += `\n━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Total: Rs. ${getCartTotal().toLocaleString()}*\n\n`;
  message += `Thank you for ordering from Al-Harmain Bakers! 🌾`;
  
  // Open WhatsApp
  const whatsappURL = `https://wa.me/9203029275780?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
  
  // Show success
  checkoutFormView.style.display = 'none';
  checkoutSuccessView.style.display = 'block';
  
  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
  checkoutForm.reset();
});

checkoutDone.addEventListener('click', () => {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
});

// ===== Toast Notification =====
let toastTimeout;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Scroll to top button
  if (window.scrollY > 400) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

// ===== Mobile Nav Toggle =====
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== Scroll to Top =====
scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  
  if (!name || !phone || !message) {
    showToast('Please fill in all required fields!');
    return;
  }
  
  // Build WhatsApp message for contact
  let waMessage = `📩 *Message from Website*\n\n`;
  waMessage += `👤 *Name:* ${name}\n`;
  waMessage += `📞 *Phone:* ${phone}\n`;
  if (subject) waMessage += `📋 *Subject:* ${subject}\n`;
  waMessage += `\n💬 *Message:*\n${message}\n\n`;
  waMessage += `— Sent from Al-Harmain Bakers Website`;
  
  const whatsappURL = `https://wa.me/9203029275780?text=${encodeURIComponent(waMessage)}`;
  window.open(whatsappURL, '_blank');
  
  showToast('Redirecting to WhatsApp...');
  contactForm.reset();
});

// ===== Intersection Observer for Scroll Animations =====
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight + 20;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// ===== Keyboard accessibility =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  observeElements();
});
