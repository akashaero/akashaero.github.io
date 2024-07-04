function toggleDarkMode() {
    const body = document.documentElement;
    const switchThumb = document.querySelector('.switch-thumb');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        switchThumb.textContent = '☀️';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        switchThumb.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
    }
}

function setInitialText() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.querySelector('.switch-thumb').textContent = '🌙';
    } else {
        document.querySelector('.switch-thumb').textContent = '☀️';
    }
}

// Function to calculate reading time
function calculateReadingTime() {
    const content = document.documentElement.innerText;
    const wordCount = content.trim().split(/\s+/).length;
    const wordsPerMinute = 150;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    document.getElementById('reading-time').textContent = `${readingTime} min read`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', setInitialText);
window.addEventListener('load', calculateReadingTime);