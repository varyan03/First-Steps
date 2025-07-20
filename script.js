document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const codeElements = document.querySelectorAll('.code-content code');
    codeElements.forEach(codeElement => {
        const originalCode = codeElement.textContent;

        function typeCode() {
            codeElement.textContent = '';
            let i = 0;
            function typeChar() {
                if (i < originalCode.length) {
                    codeElement.textContent += originalCode.charAt(i);
                    i++;
                    setTimeout(typeChar, 50);
                }
            }
            typeChar();
        }

        // Intersection Observer for each code block
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeCode();
                    obs.disconnect(); // Run only once per block
                }
            });
        }, { threshold: 0.5 });

        observer.observe(codeElement);
    });
});



// Add smooth cursor following effect
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle, rgba(243, 136, 5, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    
updateCursor();