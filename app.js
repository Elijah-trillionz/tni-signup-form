const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const passwordViewButton = document.getElementById('button-1');
const confirmPasswordViewButton = document.getElementById('button-2');

confirmPasswordViewButton.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-eye-slash')) {
    confirmPasswordField.setAttribute('type', 'password');
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye');
  } else {
    confirmPasswordField.setAttribute('type', 'text');
    e.target.classList.add('fa-eye-slash');
  }
});

passwordViewButton.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-eye-slash')) {
    passwordField.setAttribute('type', 'password');
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye');
  } else {
    passwordField.setAttribute('type', 'text');
    e.target.classList.add('fa-eye-slash');
  }
});
