// Portfolio Website JavaScript

// Global Variables
let portfolioItems = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load portfolio items from portfolio-data.js
    loadPortfolioItems();
    
    // Render initial portfolio
    renderPortfolio('all');
    
    // Setup event listeners
    setupEventListeners();
}

// Setup all event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter portfolio
            const filter = this.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Modal close
    const closeModal = document.getElementById('close-modal');
    const imageModal = document.getElementById('image-modal');
    const prevImageBtn = document.getElementById('prev-image');
    const nextImageBtn = document.getElementById('next-image');
    
    closeModal.addEventListener('click', () => {
        imageModal.classList.add('hidden');
    });
    
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.add('hidden');
        }
    });
    
    // Gallery navigation
    if (prevImageBtn) {
        prevImageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateGallery('prev');
        });
    }
    
    if (nextImageBtn) {
        nextImageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateGallery('next');
        });
    }
    
    // Keyboard navigation for gallery
    document.addEventListener('keydown', (e) => {
        if (!imageModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                navigateGallery('prev');
            } else if (e.key === 'ArrowRight') {
                navigateGallery('next');
            } else if (e.key === 'Escape') {
                imageModal.classList.add('hidden');
            }
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load Portfolio Items from portfolio-data.js
function loadPortfolioItems() {
    // Check if portfolioData exists (from portfolio-data.js)
    if (typeof portfolioData !== 'undefined') {
        portfolioItems = portfolioData;
    } else {
        console.error('Portfolio data not loaded. Make sure portfolio-data.js is included.');
        portfolioItems = [];
    }
}

// Render Portfolio with Filter
function renderPortfolio(filter) {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';
    
    // Filter items
    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);
    
    if (filteredItems.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">No designs found in this category.</div>';
        return;
    }
    
    // Render items
    filteredItems.forEach(item => {
        const itemElement = createPortfolioItem(item);
        grid.appendChild(itemElement);
    });
}

// Create Portfolio Item Element
function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'masonry-item';
    div.setAttribute('data-category', item.category);
    
    // Use first image as thumbnail, support both 'images' array and legacy 'image' property
    const thumbnailImage = item.images ? item.images[0] : item.image;
    const hasMultipleImages = item.images && item.images.length > 1;
    
    div.innerHTML = `
        <img src="${thumbnailImage}" alt="${item.title}" loading="lazy">
        <div class="masonry-item-overlay">
            <div class="masonry-item-title">${item.title}</div>
            <div class="masonry-item-category">${item.category}</div>
            ${hasMultipleImages ? '<div style="margin-top: 8px; font-size: 12px; opacity: 0.8;"><i class="fas fa-images"></i> ' + item.images.length + ' images</div>' : ''}
        </div>
    `;
    
    // Add click event to open modal
    div.addEventListener('click', () => {
        openImageModal(item);
    });
    
    return div;
}

// Open Image Modal
let currentGallery = [];
let currentImageIndex = 0;

function openImageModal(item) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    // Support both new 'images' array and legacy 'image' property
    currentGallery = item.images || [item.image];
    currentImageIndex = 0;
    
    updateModalImage();
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description || '';
    
    // Show/hide navigation arrows
    updateNavigationButtons();
    
    modal.classList.remove('hidden');
}

function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    const imageCounter = document.getElementById('image-counter');
    
    modalImage.src = currentGallery[currentImageIndex];
    
    // Update counter
    if (currentGallery.length > 1) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
        imageCounter.style.display = 'block';
    } else {
        imageCounter.style.display = 'none';
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-image');
    const nextBtn = document.getElementById('next-image');
    
    if (currentGallery.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function navigateGallery(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    }
    updateModalImage();
}

// Handle Contact Form Submit
function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit to Netlify
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        showMessage('Thank you for your message! I will get back to you soon.', 'success');
        form.reset();
    })
    .catch(() => {
        showMessage('Oops! Something went wrong. Please try again.', 'error');
    });
}

// Show Message
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '100px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.padding = '1rem 2rem';
    messageDiv.style.borderRadius = '0.75rem';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 500);
    }, 3000);
}

// Lazy loading images as user scrolls
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
