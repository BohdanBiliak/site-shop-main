const form = document.querySelector('form');
const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const email = localStorage.getItem("email");
const phone = localStorage.getItem("phone");

document.getElementById('firstName').value = firstName;
document.getElementById('lastName').value = lastName;
document.getElementById('email').value = email;
document.getElementById('number').value = phone;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNameValue =  document.getElementById('firstName').value;
    const lastNameValue = document.getElementById('lastName').value;
    const emailValue = document.getElementById('email').value;
    const phoneValue = document.getElementById('number').value;

    localStorage.setItem('firstName', firstNameValue);
    localStorage.setItem('lastName', lastNameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('phone', phoneValue);
})

form.addEventListener('reset', (e) => {
    e.preventDefault();
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');

    window.location.href = 'pay-page.html';
})