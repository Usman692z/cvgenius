// CVGenius App
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const landingSection = document.getElementById('landing');
    const authSection = document.getElementById('authSection');
    const appSection = document.getElementById('appSection');

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
        showAppSection();
    }

    // Event listeners
    loginBtn.addEventListener('click', showAuth);
    signupBtn.addEventListener('click', showAuth);
    getStartedBtn.addEventListener('click', showAuth);
    logoutBtn.addEventListener('click', logout);

    // Login form
    if (loginForm) {
        loginForm.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email && password) {
                // Simulate login
                localStorage.setItem('user', JSON.stringify({
                    name: email.split('@')[0],
                    email: email
                }));
                showAppSection();
            }
        });
    }

    // Signup form
    if (signupForm) {
        signupForm.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (name && email && password) {
                // Simulate signup
                localStorage.setItem('user', JSON.stringify({
                    name: name,
                    email: email
                }));
                showAppSection();
            }
        });
    }

    function showAuth() {
        landingSection.style.display = 'none';
        authSection.style.display = 'flex';
        appSection.style.display = 'none';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    function showAppSection() {
        const userData = JSON.parse(localStorage.getItem('user'));
        document.getElementById('userName').textContent = userData.name;

        landingSection.style.display = 'none';
        authSection.style.display = 'none';
        appSection.style.display = 'block';
    }

    function logout() {
        localStorage.removeItem('user');
        landingSection.style.display = 'block';
        authSection.style.display = 'none';
        appSection.style.display = 'none';
    }

    window.toggleAuth = (e) => {
        e.preventDefault();
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    };

    console.log('✅ CVGenius App loaded successfully!');
});
