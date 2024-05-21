// Get references to the button and the heading
let toggleButton = document.getElementById('toggleButton');
let heading = document.getElementById('heading');

toggleButton.addEventListener('click', () => {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
    } else {
       heading.style.display = 'none';
    }
});
