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
});

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
