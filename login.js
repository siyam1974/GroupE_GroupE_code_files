// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page
    if (document.getElementById('loginForm')) {
        const loginForm = document.getElementById('loginForm');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Login attempt with:', { email, password });
            
            // Simulate successful login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            // Redirect to account page
            window.location.href = 'account.html';
        });
    }
    
    // Check login status on all pages
    const loginButtons = document.querySelectorAll('.login-btn');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn) {
        loginButtons.forEach(button => {
            button.innerHTML = '<i class="fas fa-user"></i> My Account';
            button.href = 'account.html';
        });
    }
});