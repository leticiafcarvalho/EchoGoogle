const searchButton = document.querySelector('button:first-of-type');
const luckyButton = document.querySelector('button:last-of-type');
const searchInput = document.querySelector('input[type="text"]');

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});

luckyButton.addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
        window.open(`https://www.google.com/search?btnI&q=${encodeURIComponent(query)}`, '_blank');
    }
});

const themeButton = document.createElement('button');
themeButton.textContent = 'Mudar Tema';
document.body.appendChild(themeButton);

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
