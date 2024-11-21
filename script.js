// Loading screen handler
window.onload = function() {
    // Show loading screen for 2 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 2000); // Adjust the time if needed
};

// Show prices or support sections
function showPrices() {
    document.getElementById('prices-section').style.display = 'flex';
    document.getElementById('support-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';
}

function showSupport() {
    document.getElementById('prices-section').style.display = 'none';
    document.getElementById('support-section').style.display = 'block';
    document.getElementById('settings-section').style.display = 'none';
}

function showSettings() {
    document.getElementById('prices-section').style.display = 'none';
    document.getElementById('support-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'block';
}

// Dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    const darkModeStatus = document.getElementById('dark-mode-status');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeStatus.textContent = 'On';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeStatus.textContent = 'Off';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Apply dark mode if it was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-status').textContent = 'On';
}