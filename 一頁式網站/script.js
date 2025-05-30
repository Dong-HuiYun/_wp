// 輪播圖功能增強
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  // 隱藏所有圖片
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // 顯示當前圖片
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function next() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  showSlide(index);
}

// 自動輪播
let slideInterval = setInterval(next, 5000);

// 當鼠標懸停在輪播圖上時暫停自動輪播
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', () => {
  slideInterval = setInterval(next, 5000);
});

// 數量選擇器
function changeQuantity(amount) {
  const quantityInput = document.getElementById('quantity');
  let newValue = parseInt(quantityInput.value) + amount;
  
  if (newValue < 1) newValue = 1;
  if (newValue > 99) newValue = 99;
  
  quantityInput.value = newValue;
}

// 購物車功能
let cartItems = 0;

function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value);
  cartItems += quantity;
  updateCartCount();
  
  // 顯示加入購物車成功的通知
  showNotification('商品已加入購物車');
}

function buyNow() {
  // 直接購買功能
  showNotification('即將跳轉至結帳頁面');
  // 實際應用中這裡會跳轉到結帳頁面
}

function updateCartCount() {
  document.querySelector('.cart-count').textContent = cartItems;
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// 平滑滾動導航
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

function showNotification(message, isSuccess = true) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  
  // 添加圖標
  const icon = document.createElement('i');
  icon.className = isSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
  notification.appendChild(icon);
  
  // 添加消息文本
  const text = document.createElement('span');
  text.textContent = message;
  notification.appendChild(text);
  
  document.body.appendChild(notification);
  
  // 設置通知框樣式（成功/錯誤）
  notification.style.backgroundColor = isSuccess ? '#27ae60' : '#e74c3c';
  
  // 顯示通知
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // 3秒後自動消失
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// 更新購物車函數
function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value);
  if (quantity < 1) {
    showNotification('請選擇至少一件商品', false);
    return;
  }
  
  cartItems += quantity;
  updateCartCount();
  showNotification(`已成功加入 ${quantity} 件商品到購物車`);
  
  // 實際應用中可以發送數據到後端
  // fetch('/api/cart', { method: 'POST', body: JSON.stringify({productId, quantity}) })
}

function buyNow() {
  const quantity = parseInt(document.getElementById('quantity').value);
  if (quantity < 1) {
    showNotification('請選擇至少一件商品', false);
    return;
  }
  
  showNotification('即將跳轉至結帳頁面');

}

// QA折疊功能
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = button.classList.contains('active');
    
    // 關閉所有其他打開的QA
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.classList.remove('active');
      btn.nextElementSibling.classList.remove('show');
    });
    
    // 如果點擊的不是已打開的項目，則打開它
    if (!isOpen) {
      button.classList.add('active');
      answer.classList.add('show');
    }
  });
});

// 步驟卡片懸停效果（可選）
document.querySelectorAll('.step-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.step-number').style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.step-number').style.transform = 'scale(1)';
  });
});

// 圖片點擊放大
document.querySelectorAll('.review-images img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    
    const enlargedImg = document.createElement('img');
    enlargedImg.src = this.src;
    enlargedImg.alt = this.alt;
    
    overlay.appendChild(enlargedImg);
    overlay.addEventListener('click', () => overlay.remove());
    
    document.body.appendChild(overlay);
  });
});

// 每次都重新取得所有 .page-btn（避免變動造成的錯位）
function getPageButtons() {
  return Array.from(document.querySelectorAll('.page-btn'));
}

nextButton.addEventListener('click', function () {
  const pageButtons = getPageButtons();
  const current = document.querySelector('.page-btn.active');
  const currentIndex = pageButtons.indexOf(current);

  // 檢查是否還有下一個頁碼按鈕
  if (currentIndex !== -1 && currentIndex < pageButtons.length - 1) {
    current.classList.remove('active');
    pageButtons[currentIndex + 1].classList.add('active');
  }
});

document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.page-btn.active')?.classList.remove('active');
    this.classList.add('active');
  });
});





// 初始化
showSlide(0);