// Grabbing the theme toggle button from the DOM
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Check if there is a stored theme in localStorage
const currentTheme = localStorage.getItem('theme') || 'light';

// Set the initial theme based on the stored value or default to 'light'
document.documentElement.setAttribute('data-theme', currentTheme);

// Set the toggle button state based on the current theme
if (currentTheme === 'dark') {
    themeToggleBtn.textContent = 'Light Mode';
} else {
    themeToggleBtn.textContent = 'Dark Mode';
}

// Event listener to toggle theme when the button is clicked
themeToggleBtn.addEventListener('click', () => {
    // Determine the new theme
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme to the document root
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update the button text to reflect the current mode
    themeToggleBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    
    // Store the selected theme in localStorage
    localStorage.setItem('theme', newTheme);
});
