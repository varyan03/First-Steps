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