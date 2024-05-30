// scripts.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        alert('All fields are required!');
        return;
    }

    // Simulate successful signup
    alert('Successfully signed up');

    // Hide signup form and show login form
    document.querySelector('.signup-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login form validation logic here
    if (email && password) {
        // Simulate successful login
        alert('Successfully logged in');

        // Hide all forms and show thank you message
        document.querySelector('.form-wrapper').classList.add('hidden');
        document.getElementById('thankYouContainer').classList.remove('hidden');
    } else {
        alert('Please enter valid credentials');
    }
});






