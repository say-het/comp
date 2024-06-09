const toggleSwitch = document.getElementById('toggle');
const modeLabel = document.getElementById('mode-label');

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeLabel.textContent = 'Dark Mode';
    } else {
        modeLabel.textContent = 'Light Mode';
    }
}

toggleSwitch.addEventListener('change', toggleDarkMode);
