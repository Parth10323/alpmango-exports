// Wait for the entire window (images, CSS, fonts) to finish loading
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // 1. Hold the animation for 1 second to ensure a smooth user experience
    setTimeout(() => {
        // 2. Fade out the opacity (requires the CSS transition we added earlier)
        preloader.style.opacity = '0'; 
        
        // 3. After the fade finishes, remove the element entirely so users can click the site
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // This 500ms matches the CSS transition time
    }, 1000); 
});

