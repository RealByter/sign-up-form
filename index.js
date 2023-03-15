const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const verifyPassword = e => {
	console.log(e);
	if (password.value === confirmPassword.value && password.value.length >= 4) {
		password.classList.remove('invalid');
		confirmPassword.classList.remove('invalid');
	} else {
		password.classList.add('invalid');
		password.classList.add('invalid');
	}
};

password.addEventListener('input', verifyPassword);
confirmPassword.addEventListener('input', verifyPassword);
