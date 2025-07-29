// Early 2000s Dark Webcore JavaScript Effects

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for subtitle
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = 'DIBUJOS Y COMISIONES';
        typingText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }

    // Random glitch effect on title
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    glitchElement.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }, 500);
    }

    // Visitor counter animation
    const counterNumber = document.querySelector('.counter-number');
    if (counterNumber) {
        let count = 1337;
        
        function updateCounter() {
            count += Math.floor(Math.random() * 3);
            counterNumber.textContent = count.toString().padStart(6, '0');
        }
        
        // Update counter every 30 seconds
        setInterval(updateCounter, 30000);
    }

    // Matrix rain effect (subtle)
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 50);

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Initialize matrix rain with delay
    setTimeout(createMatrixRain, 2000);

    // Add scan lines effect
    function addScanLines() {
        const scanLines = document.createElement('div');
        scanLines.className = 'scan-lines';
        scanLines.innerHTML = Array(50).fill('<div class="scan-line"></div>').join('');
        document.body.appendChild(scanLines);
    }

    // Random text corruption effect
    function corruptText() {
        const textElements = document.querySelectorAll('.welcome-text, .contact-text');
        textElements.forEach(element => {
            if (Math.random() < 0.02) {
                const originalText = element.textContent;
                const corruptedText = originalText.split('').map(char => 
                    Math.random() < 0.1 ? String.fromCharCode(Math.random() * 26 + 65) : char
                ).join('');
                
                element.textContent = corruptedText;
                setTimeout(() => {
                    element.textContent = originalText;
                }, 200);
            }
        });
    }

    // Run corruption effect occasionally
    setInterval(corruptText, 5000);

    // Add hover sound effects (visual feedback)
    const navLinks = document.querySelectorAll('.nav-link, .quick-link, .contact-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px currentColor';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });

    // Random status updates
    const statusTexts = [
        'ACCEPTING COMMISSIONS',
        'ONLINE',
        'DRAWING IN PROGRESS',
        'AVAILABLE FOR WORK',
        'COMMISSION SLOTS OPEN'
    ];
    
    const statusTextElement = document.querySelector('.status-text');
    if (statusTextElement) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                const randomStatus = statusTexts[Math.floor(Math.random() * statusTexts.length)];
                const originalStatus = statusTextElement.textContent;
                statusTextElement.textContent = randomStatus;
                
                setTimeout(() => {
                    statusTextElement.textContent = originalStatus;
                }, 3000);
            }
        }, 10000);
    }

    // Window focus/blur effects
    let originalTitle = document.title;
    
    window.addEventListener('blur', () => {
        document.title = '(◕‿◕) RYUZKA.XYZ - Come back!';
    });
    
    window.addEventListener('focus', () => {
        document.title = originalTitle;
    });

    // Add CRT monitor effect
    function addCRTEffect() {
        const crtOverlay = document.createElement('div');
        crtOverlay.className = 'crt-overlay';
        crtOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
            background: 
                linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%),
                linear-gradient(90deg, transparent 50%, rgba(255, 0, 255, 0.02) 50%);
            background-size: 2px 2px, 2px 2px;
            animation: crt-flicker 0.15s infinite linear;
        `;
        document.body.appendChild(crtOverlay);
    }

    // Add CRT styles
    const crtStyles = document.createElement('style');
    crtStyles.textContent = `
        @keyframes crt-flicker {
            0% { opacity: 1; }
            98% { opacity: 1; }
            99% { opacity: 0.98; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(crtStyles);
    
    setTimeout(addCRTEffect, 1500);

    // Console messages for the authentic webcore experience
    console.log('🖤 Welcome to RYUZKA.XYZ 🖤');
    console.log('Built with dark webcore aesthetics');
    console.log('If you can see this, you\'re probably a developer too :)');
    console.log('Commission status: OPEN');
    console.log('Last updated: 2025');

    // Gallery functionality
    initializeGallery();
    
    // Merch functionality
    initializeMerch();
    
    // Status functionality
    initializeStatus();
});

// Merch Functions
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
                
                // Add glitch effect to button
                addGlitchEffect(this);
            });
        });
    }

    // Merch item hover effects
    merchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(255, 0, 255, 0.4)';
            
            // Add random glitch effect to price
            const price = this.querySelector('.merch-price');
            if (price && Math.random() < 0.3) {
                const originalText = price.textContent;
                price.style.animation = 'glitch-skew 0.2s ease';
                setTimeout(() => {
                    price.style.animation = '';
                }, 200);
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });

        // Copy product code on click
        item.addEventListener('click', function() {
            const codeElement = this.querySelector('.merch-code');
            if (codeElement) {
                const code = codeElement.textContent.replace('Código: ', '');
                copyToClipboard(code);
                
                // Show feedback
                showCopyFeedback(this, code);
            }
        });
    });

    // Order step animations
    const orderSteps = document.querySelectorAll('.order-step');
    orderSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            
            // Animate step number
            const stepNumber = this.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.animation = 'pulse 0.6s ease';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

function filterMerchItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

function copyToClipboard(text) {
    // Create temporary textarea for copying
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function showCopyFeedback(element, code) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.innerHTML = `
        <span class="feedback-icon">📋</span>
        <span class="feedback-text">Código ${code} copiado!</span>
    `;
    feedback.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: #50fa7b;
        color: #000;
        padding: 5px 10px;
        border-radius: 4px;
        font-family: 'VT323', monospace;
        font-size: 0.9rem;
        z-index: 1000;
        animation: copyFeedback 2s ease forwards;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(feedback);
    
    // Remove feedback after animation
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// Add CSS animations for merch
const merchStyles = document.createElement('style');
merchStyles.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes copyFeedback {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        20% {
            opacity: 1;
            transform: translateY(0);
        }
        80% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    .merch-item {
        cursor: pointer;
    }
    
    .merch-item:hover .merch-code {
        color: #50fa7b;
    }
`;
document.head.appendChild(merchStyles);

// Status Functions
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
                
                // Add glitch effect to button
                addGlitchEffect(this);
            });
        });
    }

    // Simulate real-time status updates
    updateStatusIndicator();
    setInterval(updateStatusIndicator, 30000); // Update every 30 seconds

    // Animate stats on load
    animateStats();
}

function showEmbedContainer(boardType, containers) {
    containers.forEach(container => {
        if (container.id === `${boardType}-embed`) {
            container.style.display = 'block';
            container.style.animation = 'fadeInUp 0.6s ease';
        } else {
            container.style.display = 'none';
        }
    });
}

function updateStatusIndicator() {
    const statusDot = document.querySelector('.status-dot');
    const statusValue = document.querySelector('.status-value');
    
    if (!statusDot || !statusValue) return;

    // Simulate different status states
    const statuses = [
        { class: 'online', text: 'ACEPTANDO COMISIONES', probability: 0.7 },
        { class: 'busy', text: 'OCUPADO - POCAS SLOTS', probability: 0.2 },
        { class: 'offline', text: 'CERRADO TEMPORALMENTE', probability: 0.1 }
    ];

    const random = Math.random();
    let currentStatus = statuses[0]; // Default to online

    let cumulative = 0;
    for (const status of statuses) {
        cumulative += status.probability;
        if (random < cumulative) {
            currentStatus = status;
            break;
        }
    }

    // Update status indicator
    statusDot.className = `status-dot ${currentStatus.class}`;
    statusValue.className = `status-value ${currentStatus.class}`;
    statusValue.textContent = currentStatus.text;

    // Add glitch effect occasionally
    if (Math.random() < 0.1) {
        statusValue.style.animation = 'glitch-skew 0.3s ease';
        setTimeout(() => {
            statusValue.style.animation = '';
        }, 300);
    }
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        const finalValue = parseInt(stat.textContent);
        stat.textContent = '0';
        
        setTimeout(() => {
            animateNumber(stat, 0, finalValue, 1000);
        }, index * 200);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Add CSS animations for status page
const statusStyles = document.createElement('style');
statusStyles.textContent = `
    @keyframes statusPulse {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
    }
    
    .embed-container {
        animation: fadeInUp 0.6s ease;
    }
    
    .board-card:hover,
    .grid-card:hover,
    .github-issue:hover {
        transform: translateX(5px);
        background: #2a2a2a !important;
    }
`;
document.head.appendChild(statusStyles);

// Gallery Functions
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
                
                // Add glitch effect to button
                addGlitchEffect(this);
            });
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more items
            this.innerHTML = '<span class="load-icon">⏳</span><span class="load-text">CARGANDO...</span>';
            
            setTimeout(() => {
                // Create more gallery items (simulated)
                createMoreGalleryItems();
                this.innerHTML = '<span class="load-icon">⬇️</span><span class="load-text">CARGAR MÁS TRABAJOS</span>';
            }, 2000);
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

    // Gallery item hover sound effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(255, 0, 255, 0.4)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

function filterGalleryItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

function addGlitchEffect(element) {
    element.style.animation = 'glitch-skew 0.3s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

function createMoreGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const newItems = [
        {
            category: 'commission',
            icon: '🎨',
            title: 'COMMISSION #003',
            subtitle: 'Fantasy Character',
            client: 'Cliente: @fantasy_lover',
            fullTitle: 'Guerrero Élfico',
            description: 'Diseño completo de guerrero élfico con armadura detallada y armas mágicas.',
            tags: ['Fantasy', 'Detailed']
        },
        {
            category: 'sketch',
            icon: '✏️',
            title: 'SKETCH #002',
            subtitle: 'Speed Drawing',
            client: 'Práctica Rápida',
            fullTitle: 'Estudios de Expresión',
            description: 'Serie de bocetos explorando diferentes expresiones faciales y emociones.',
            tags: ['Expression', 'Study']
        },
        {
            category: 'personal',
            icon: '⭐',
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
        galleryItem.style.opacity = '0';

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

        // Animate in
        setTimeout(() => {
            galleryItem.style.opacity = '1';
            galleryItem.style.animation = 'fadeInUp 0.6s ease';
        }, 100);

        // Add hover effects
        galleryItem.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(255, 0, 255, 0.4)';
        });
        
        galleryItem.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Add CSS animations for gallery
const galleryStyles = document.createElement('style');
galleryStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .gallery-item {
        animation: fadeInUp 0.6s ease;
    }
`;
document.head.appendChild(galleryStyles);

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konami.join(',')) {
        // Easter egg activated
        document.body.style.animation = 'rainbow 1s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        // Add rainbow animation
        const rainbowStyles = document.createElement('style');
        rainbowStyles.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyles);
        
        console.log('🌈 KONAMI CODE ACTIVATED! 🌈');
    }
});
