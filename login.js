function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (document.getElementById('rememberMe').checked) {
        // Set cookies for 30 days
        setCookie('username', username, 30);
        setCookie('email', email, 30);
        setCookie('password', password, 30);
    }

    // Store in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Account created successfully!');
    window.location.href = 'Astronomy.html'; 
}

function togglePasswordVisibility(id) {
    var input = document.getElementById(id);
    var icon = input.nextElementSibling;

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('bx-show');
        icon.classList.add('bx-hide');
    } else {
        input.type = 'password';
        icon.classList.remove('bx-hide');
        icon.classList.add('bx-show');
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function togglePasswordVisibility(fieldId) {
    var field = document.getElementById(fieldId);
    var toggle = document.querySelector(`#${fieldId} + .toggle-password`);

    if (field.type === "password") {
        field.type = "text";
        toggle.textContent = "Hide Password";
    } else {
        field.type = "password";
        toggle.textContent = "Show Password";
    }
}

