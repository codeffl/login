document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        errorMessage.classList.remove('visible');
        // Redirect or perform any other actions on successful login
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.classList.add('visible');
    }
});
