// Main JavaScript for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize video players
    initVideoPlayers();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Video Player Functionality
function initVideoPlayers() {
    const videoPlayers = document.querySelectorAll('.video-player');
    
    videoPlayers.forEach(video => {
        const container = video.closest('.video-item');
        const playBtn = container.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        
        // Click play button
        playBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playIcon.classList.replace('fa-play', 'fa-pause');
                video.classList.remove('paused');
            } else {
                video.pause();
                playIcon.classList.replace('fa-pause', 'fa-play');
                video.classList.add('paused');
            }
        });
        
        // Video ended
        video.addEventListener('ended', function() {
            playIcon.classList.replace('fa-pause', 'fa-play');
            video.classList.add('paused');
        });
        
        // Click on video
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playIcon.classList.replace('fa-play', 'fa-pause');
                video.classList.remove('paused');
            } else {
                video.pause();
                playIcon.classList.replace('fa-pause', 'fa-play');
                video.classList.add('paused');
            }
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});