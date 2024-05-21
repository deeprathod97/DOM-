let themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

document.body.classList.add('light-theme');
