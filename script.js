// ═══════════════════════════════════════════════
// DARK WEBCORE - OLD INTERNET AESTHETIC
// ~ lost in the internet at 2am in 2003 ~
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// FEATURE FLAGS
// Set to true to enable features in production
// ═══════════════════════════════════════════════
const FEATURE_FLAGS = {
    GALLERY_ENABLED: false,
    MERCH_ENABLED: false,
    STATS_ENABLED: false,
    VISITOR_COUNTER_ENABLED: false
};

// Expose to window for console access
window.FEATURE_FLAGS = FEATURE_FLAGS;
window.refreshFF = function() {
    applyFeatureFlags();
    console.log('Feature flags refreshed!', FEATURE_FLAGS);
};

document.addEventListener('DOMContentLoaded', function() {
    // Apply feature flags
    applyFeatureFlags();

    // Update copyright year dynamically
    document.querySelectorAll('.copyright-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Set typing text immediately (no animation)
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.textContent = 'DIBUJOS Y COMISIONES';
    }

    // Console messages - old internet style
    console.log('');
    console.log('========================================');
    console.log('   * RYUZKA.XYZ *');
    console.log('   welcome to my corner of the web');
    console.log('========================================');
    console.log('');
    console.log('>> commission status: OPEN');
    console.log('>> last updated: 2025');
    console.log('');
    console.log('if you can read this...');
    console.log('you\'re probably a developer too :)');
    console.log('');

    // Gallery functionality
    initializeGallery();
    
    // Merch functionality
    initializeMerch();
    
    // Status functionality
    initializeStatus();
});

// ═══════════════════════════════════════════════
// FEATURE FLAGS HANDLER
// ═══════════════════════════════════════════════
function applyFeatureFlags() {
    // Gallery elements
    document.querySelectorAll('a[href="gallery.html"]').forEach(el => {
        el.style.display = FEATURE_FLAGS.GALLERY_ENABLED ? '' : 'none';
    });
    document.querySelectorAll('.quick-link[href="gallery.html"]').forEach(el => {
        el.style.display = FEATURE_FLAGS.GALLERY_ENABLED ? '' : 'none';
    });

    // Merch elements
    document.querySelectorAll('a[href="merch.html"]').forEach(el => {
        el.style.display = FEATURE_FLAGS.MERCH_ENABLED ? '' : 'none';
    });

    // Stats section
    document.querySelectorAll('.subsection-title').forEach(el => {
        if (el.textContent.includes('ESTADÍSTICAS ACTUALES')) {
            const statsBox = el.closest('.section-box');
            if (statsBox) {
                statsBox.style.display = FEATURE_FLAGS.STATS_ENABLED ? '' : 'none';
            }
        }
    });

    // Visitor Counter
    document.querySelectorAll('.visitor-counter').forEach(el => {
        el.style.display = FEATURE_FLAGS.VISITOR_COUNTER_ENABLED ? '' : 'none';
    });

    // Update panel checkboxes if panel exists
    updateFFPanel();
}

// ═══════════════════════════════════════════════
// KONAMI CODE - SECRET FEATURE FLAGS PANEL
// ↑ ↑ ↓ ↓ ← → ← → B A
// ═══════════════════════════════════════════════
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.code === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
            konamiIndex = 0;
            toggleFFPanel();
        }
    } else {
        konamiIndex = 0;
    }
});

function toggleFFPanel() {
    let panel = document.getElementById('ff-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    } else {
        createFFPanel();
    }
}

function createFFPanel() {
    const panel = document.createElement('div');
    panel.id = 'ff-panel';
    panel.innerHTML = `
        <div class="ff-panel-header">
            <span>[*] FEATURE FLAGS</span>
            <button class="ff-close" onclick="document.getElementById('ff-panel').style.display='none'">[X]</button>
        </div>
        <div class="ff-panel-content">
            <label class="ff-option">
                <input type="checkbox" id="ff-gallery" ${FEATURE_FLAGS.GALLERY_ENABLED ? 'checked' : ''}>
                <span>GALERÍA</span>
            </label>
            <label class="ff-option">
                <input type="checkbox" id="ff-merch" ${FEATURE_FLAGS.MERCH_ENABLED ? 'checked' : ''}>
                <span>MERCH</span>
            </label>
            <label class="ff-option">
                <input type="checkbox" id="ff-stats" ${FEATURE_FLAGS.STATS_ENABLED ? 'checked' : ''}>
                <span>ESTADÍSTICAS</span>
            </label>
            <label class="ff-option">
                <input type="checkbox" id="ff-visitor" ${FEATURE_FLAGS.VISITOR_COUNTER_ENABLED ? 'checked' : ''}>
                <span>CONTADOR VISITAS</span>
            </label>
        </div>
        <div class="ff-panel-footer">
            <span class="ff-hint">↑↑↓↓←→←→BA</span>
        </div>
    `;
    
    panel.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0a0a0a;
        border: 2px solid #00ff00;
        font-family: 'Courier Prime', monospace;
        z-index: 9999;
        min-width: 200px;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    `;
    
    document.body.appendChild(panel);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #ff-panel .ff-panel-header {
            background: #00ff00;
            color: #0a0a0a;
            padding: 8px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            font-size: 12px;
        }
        #ff-panel .ff-close {
            background: none;
            border: none;
            color: #0a0a0a;
            cursor: pointer;
            font-family: inherit;
            font-weight: bold;
        }
        #ff-panel .ff-close:hover {
            color: #ff0000;
        }
        #ff-panel .ff-panel-content {
            padding: 15px;
        }
        #ff-panel .ff-option {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #00ff00;
            font-size: 12px;
            margin-bottom: 10px;
            cursor: pointer;
        }
        #ff-panel .ff-option:last-child {
            margin-bottom: 0;
        }
        #ff-panel .ff-option input {
            accent-color: #00ff00;
            width: 16px;
            height: 16px;
            cursor: pointer;
        }
        #ff-panel .ff-panel-footer {
            border-top: 1px solid #333;
            padding: 8px 10px;
            text-align: center;
        }
        #ff-panel .ff-hint {
            color: #666;
            font-size: 10px;
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners
    document.getElementById('ff-gallery').addEventListener('change', function() {
        FEATURE_FLAGS.GALLERY_ENABLED = this.checked;
        applyFeatureFlags();
    });
    document.getElementById('ff-merch').addEventListener('change', function() {
        FEATURE_FLAGS.MERCH_ENABLED = this.checked;
        applyFeatureFlags();
    });
    document.getElementById('ff-stats').addEventListener('change', function() {
        FEATURE_FLAGS.STATS_ENABLED = this.checked;
        applyFeatureFlags();
    });
    document.getElementById('ff-visitor').addEventListener('change', function() {
        FEATURE_FLAGS.VISITOR_COUNTER_ENABLED = this.checked;
        applyFeatureFlags();
    });
}

function updateFFPanel() {
    const panel = document.getElementById('ff-panel');
    if (!panel) return;
    
    const gallery = document.getElementById('ff-gallery');
    const merch = document.getElementById('ff-merch');
    const stats = document.getElementById('ff-stats');
    const visitor = document.getElementById('ff-visitor');
    
    if (gallery) gallery.checked = FEATURE_FLAGS.GALLERY_ENABLED;
    if (merch) merch.checked = FEATURE_FLAGS.MERCH_ENABLED;
    if (stats) stats.checked = FEATURE_FLAGS.STATS_ENABLED;
    if (visitor) visitor.checked = FEATURE_FLAGS.VISITOR_COUNTER_ENABLED;
}

// ═══════════════════════════════════════════════
// MERCH FUNCTIONS
// ═══════════════════════════════════════════════
function initializeMerch() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const merchItems = document.querySelectorAll('.merch-item');

    // Filter functionality for merch
    if (filterButtons.length && merchItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter merch items
                filterMerchItems(filter, merchItems);
            });
        });
    }

    // Copy product code on click
    merchItems.forEach(item => {
        item.addEventListener('click', function() {
            const codeElement = this.querySelector('.merch-code');
            if (codeElement) {
                const code = codeElement.textContent.replace('Código: ', '');
                copyToClipboard(code);
                showCopyFeedback(this, code);
            }
        });
    });
}

function filterMerchItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

function showCopyFeedback(element, code) {
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.innerHTML = `>> código ${code} copiado`;
    feedback.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        background: #000;
        color: #00ff00;
        padding: 4px 8px;
        font-family: 'Courier New', monospace;
        font-size: 10px;
        z-index: 1000;
        border: 1px solid #00ff00;
    `;
    
    element.style.position = 'relative';
    element.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// ═══════════════════════════════════════════════
// STATUS FUNCTIONS
// ═══════════════════════════════════════════════
function initializeStatus() {
    const boardButtons = document.querySelectorAll('.board-btn');
    const embedContainers = document.querySelectorAll('.embed-container');

    // Board selector functionality
    if (boardButtons.length) {
        boardButtons.forEach(button => {
            button.addEventListener('click', function() {
                const boardType = this.getAttribute('data-board');
                
                // Update active button
                boardButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding embed container
                showEmbedContainer(boardType, embedContainers);
            });
        });
    }
}

function showEmbedContainer(boardType, containers) {
    containers.forEach(container => {
        if (container.id === `${boardType}-embed`) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

// ═══════════════════════════════════════════════
// GALLERY FUNCTIONS
// ═══════════════════════════════════════════════
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const loadMoreBtn = document.querySelector('.load-more-btn');

    // Filter functionality
    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter gallery items
                filterGalleryItems(filter, galleryItems);
            });
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="load-icon">[~]</span><span class="load-text">LOADING...</span>';
            
            setTimeout(() => {
                createMoreGalleryItems();
                this.innerHTML = '<span class="load-icon">[v]</span><span class="load-text">LOAD MORE</span>';
            }, 1000);
        });
    }

    // NSFW content toggle
    const nsfwItems = document.querySelectorAll('[data-category="nsfw"]');
    nsfwItems.forEach(item => {
        item.addEventListener('click', function() {
            const placeholder = this.querySelector('.nsfw-placeholder');
            if (placeholder) {
                placeholder.style.filter = placeholder.style.filter ? '' : 'blur(0px)';
                if (!placeholder.style.filter) {
                    const warning = this.querySelector('.nsfw-warning');
                    if (warning) warning.style.display = 'none';
                }
            }
        });
    });
}

function filterGalleryItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function createMoreGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const newItems = [
        {
            category: 'commission',
            icon: '[*]',
            title: 'COMMISSION #003',
            subtitle: 'Fantasy Character',
            client: 'Cliente: @fantasy_lover',
            fullTitle: 'Guerrero Élfico',
            description: 'Diseño completo de guerrero élfico con armadura detallada y armas mágicas.',
            tags: ['Fantasy', 'Detailed']
        },
        {
            category: 'sketch',
            icon: '[/]',
            title: 'SKETCH #002',
            subtitle: 'Speed Drawing',
            client: 'Práctica Rápida',
            fullTitle: 'Estudios de Expresión',
            description: 'Serie de bocetos explorando diferentes expresiones faciales y emociones.',
            tags: ['Expression', 'Study']
        },
        {
            category: 'personal',
            icon: '[.]',
            title: 'PERSONAL #003',
            subtitle: 'Environment Art',
            client: 'Proyecto Personal',
            fullTitle: 'Paisaje Cyberpunk',
            description: 'Exploración de ambientes futuristas con estética cyberpunk.',
            tags: ['Environment', 'Cyberpunk']
        }
    ];

    newItems.forEach(itemData => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', itemData.category);

        galleryItem.innerHTML = `
            <div class="gallery-image-container">
                <div class="gallery-placeholder">
                    <div class="placeholder-content">
                        <span class="placeholder-icon">${itemData.icon}</span>
                        <span class="placeholder-text">${itemData.title}</span>
                        <div class="placeholder-details">
                            <p>${itemData.subtitle}</p>
                            <p>${itemData.client}</p>
                        </div>
                    </div>
                </div>
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h4 class="gallery-title">${itemData.fullTitle}</h4>
                        <p class="gallery-description">${itemData.description}</p>
                        <div class="gallery-tags">
                            ${itemData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });
}
