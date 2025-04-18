function saveData() {
    const name = document.getElementById('nameInput').value;

    // Set cookie to expire at the end of 2025
    let date = new Date();
    date.setFullYear(2025, 11, 31);  // Set to December 31, 2025
    date.setHours(23, 59, 59, 999);  // Set to 11:59:59 PM
    document.cookie = "username=" + name + "; expires=" + date.toUTCString() + "; path=/";

    console.log("Cookies after setting: " + document.cookie);  // Debugging line

    // Save in Local Storage
    localStorage.setItem('localName', name);

    // Save in Session Storage
    sessionStorage.setItem('sessionName', name);

    alert('Data saved in Cookie (until end of 2025), Local Storage, and Session Storage!');
}

function loadData() {
    let output = '';

    // Load from Cookie
    const cookies = document.cookie.split(';');
    let cookieName = 'Not found';
    cookies.forEach(cookie => {
        if (cookie.trim().startsWith('username=')) {
            cookieName = cookie.split('=')[1];
        }
    });
    output += 'Cookie: ' + cookieName + '<br>';

    // Load from Local Storage
    const localName = localStorage.getItem('localName') || 'Not found';
    output += 'Local Storage: ' + localName + '<br>';

    // Load from Session Storage
    const sessionName = sessionStorage.getItem('sessionName') || 'Not found';
    output += 'Session Storage: ' + sessionName + '<br>';

    document.getElementById('output').innerHTML = output;
}

function clearData() {
    // Clear Cookie (set expiry in the past)
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Clear Local Storage
    localStorage.clear();

    // Clear Session Storage
    sessionStorage.clear();

    alert('All data cleared!');
}

