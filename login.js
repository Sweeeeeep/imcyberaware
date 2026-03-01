const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Toggle to registration view
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Toggle to login view
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Optional: Form submission handling with animation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('.btn');
        const originalText = btn.textContent;
        
        // Loading animation
        btn.textContent = 'Loading...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            
            // Success animation
            btn.style.background = '#4CAF50';
            setTimeout(() => {
                btn.style.background = '';
            }, 1000);
        }, 1500);
    });
});

// Optional: Add input focus effects
document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
