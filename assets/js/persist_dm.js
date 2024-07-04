(function() {
    const darkModePreference = localStorage.getItem('darkMode');
    const body = document.documentElement;
    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
    }
})();