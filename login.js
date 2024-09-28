document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation
    if (email === 'test@example.com' && password === 'password123') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        // Redirect to another page or perform login action here
    } else {
        messageElement.textContent = 'Invalid email or password.';
        messageElement.style.color = 'red';
    }
});