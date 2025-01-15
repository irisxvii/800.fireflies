document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!name || !email || !password) {
        alert('Please fill in all required fields');
        return;
    }
    
    this.style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
});