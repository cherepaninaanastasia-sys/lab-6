// Находим форму и все поля ввода
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


function showError(input, message) {
    const formGroup = input.parentElement; 
    const errorElement = formGroup.querySelector('.error');
    
    input.classList.remove('success');
    input.classList.add('error-border'); 
    errorElement.innerText = message; 
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error');
    
    input.classList.remove('error-border');
    input.classList.add('success'); 
    errorElement.innerText = '';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


form.addEventListener('submit', function(event) {
 
    event.preventDefault(); 

    let isFormValid = true;

  
    if (username.value.trim() === '') {
        showError(username, 'Имя обязательно для заполнения');
        isFormValid = false;
    } else {
        showSuccess(username);
    }

   
    if (email.value.trim() === '') {
        showError(email, 'Email обязателен для заполнения');
        isFormValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Введите корректный адрес email (например: name@mail.com)');
        isFormValid = false;
    } else {
        showSuccess(email);
    }

    
    if (password.value.trim() === '') {
        showError(password, 'Пароль обязателен');
        isFormValid = false;
    } else if (password.value.trim().length < 6) {
        showError(password, 'Пароль должен содержать минимум 6 символов');
        isFormValid = false;
    } else {
        showSuccess(password);
    }

   
    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Пожалуйста, подтвердите пароль');
        isFormValid = false;
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        showError(confirmPassword, 'Пароли не совпадают');
        isFormValid = false;
    } else {
        showSuccess(confirmPassword);
    }

    if (isFormValid) {
        alert('Поздравляю! Форма успешно заполнена и прошла валидацию.');
        
    }
});
