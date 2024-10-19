// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send these credentials to your server
        console.log('Login attempted with username:', username);
        
        // For demonstration purposes, we'll just show an alert
        alert('Login functionality would be implemented here. Remember to never log real passwords!');
    });

    // Function to load custom GPT
    function loadCustomGPT(url) {
        const iframe = document.querySelector('#gpt iframe');
        iframe.src = url;
    }

    // Example usage:
    // loadCustomGPT('https://your-custom-gpt-url.com');

    // Function to play media
    function playMedia(mediaElement) {
        mediaElement.play();
    }

    // Example usage:
    // const audioElement = document.querySelector('audio');
    // const videoElement = document.querySelector('video');
    // playMedia(audioElement);
    // playMedia(videoElement);
});
