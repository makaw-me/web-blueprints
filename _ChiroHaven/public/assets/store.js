/**
 * ChiroHaven Clinical Store & Wishlist State Manager
 * Zero third-party dependencies, accessible, persistent via localStorage.
 */
(function() {
  if (typeof window === 'undefined') return;

  const CART_KEY = 'chirohaven_cart_items';
  const WISHLIST_KEY = 'chirohaven_wishlist_items';

  function safeGet(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function safeSet(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }

  const store = {
    getCart() {
      return safeGet(CART_KEY);
    },

    saveCart(items) {
      safeSet(CART_KEY, items);
      this.updateBadges();
      window.dispatchEvent(new CustomEvent('chiro:cart-updated', { detail: { items } }));
    },

    addToCart(product, qty = 1) {
      const cart = this.getCart();
      const existing = cart.find(i => i.id === product.id);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          url: product.url,
          sku: product.sku || product.id,
          qty: qty
        });
      }
      this.saveCart(cart);
      this.showToast(`✓ Added "${product.name}" to cart!`);
    },

    removeFromCart(id) {
      const cart = this.getCart().filter(i => i.id !== id);
      this.saveCart(cart);
      this.showToast('Item removed from cart');
    },

    updateQty(id, qty) {
      let cart = this.getCart();
      if (qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      } else {
        const item = cart.find(i => i.id === id);
        if (item) item.qty = qty;
      }
      this.saveCart(cart);
    },

    clearCart() {
      this.saveCart([]);
    },

    getCartCount() {
      return this.getCart().reduce((acc, i) => acc + (i.qty || 1), 0);
    },

    getCartSubtotal() {
      return this.getCart().reduce((acc, i) => acc + (i.price * (i.qty || 1)), 0);
    },

    // Wishlist
    getWishlist() {
      return safeGet(WISHLIST_KEY);
    },

    saveWishlist(items) {
      safeSet(WISHLIST_KEY, items);
      this.updateBadges();
      window.dispatchEvent(new CustomEvent('chiro:wishlist-updated', { detail: { items } }));
    },

    toggleWishlist(product) {
      let list = this.getWishlist();
      const exists = list.some(i => i.id === product.id);
      if (exists) {
        list = list.filter(i => i.id !== product.id);
        this.saveWishlist(list);
        this.showToast(`Removed "${product.name}" from wishlist`);
        return false;
      } else {
        list.push({
          id: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          url: product.url
        });
        this.saveWishlist(list);
        this.showToast(`♥ Added "${product.name}" to wishlist!`);
        return true;
      }
    },

    isWishlisted(id) {
      return this.getWishlist().some(i => i.id === id);
    },

    // Badges
    updateBadges() {
      const cartCount = this.getCartCount();
      const wishCount = this.getWishlist().length;

      document.querySelectorAll('.cart-count-badge').forEach(el => {
        el.textContent = cartCount;
        el.setAttribute('aria-label', `${cartCount} items in shopping cart`);
        el.style.display = cartCount > 0 ? 'inline-flex' : 'none';
      });

      document.querySelectorAll('.wishlist-count-badge').forEach(el => {
        el.textContent = wishCount;
        el.setAttribute('aria-label', `${wishCount} items in wishlist`);
        el.style.display = wishCount > 0 ? 'inline-flex' : 'none';
      });
    },

    // Toast
    showToast(msg) {
      let toast = document.getElementById('chiro-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'chiro-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
      }
      toast.textContent = msg;
      toast.classList.add('is-visible');

      if (this._toastTimer) clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 3200);
    }
  };

  window.ChiroStore = store;

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => store.updateBadges());
  } else {
    store.updateBadges();
  }
})();

