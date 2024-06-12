const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('number');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNameValue =  firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;

    localStorage.setItem('firstName', firstNameValue);
    localStorage.setItem('lastName', lastNameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('phone', phoneValue);

    window.location.href = 'pay-confirmation.html';
})