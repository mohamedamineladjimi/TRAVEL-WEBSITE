// Registration form validation
document.addEventListener('DOMContentLoaded', function() {
const registerForm = document.getElementById('registerForm');
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    modal.show();
});

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
      // Email validation: alphanumeric chars + @ + .com
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
      // Password: at least 4 chars, one uppercase
    const passRegex = /^(?=.*[A-Z]).{4,}$/;
    
    if (!firstName || !lastName) {
        alert('Please enter name and last name');
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert('Email must be like user@example.com (alphanumeric + @ + .com)');
        return;
    }
    
    if (!passRegex.test(password)) {
        alert('Password must have at least 4 characters and 1 uppercase letter');
        return;
    }
    
      // Success
    alert('Registration successful! Welcome ' + firstName + ' ' + lastName);
      // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    registerForm.reset();
    });
}
});
