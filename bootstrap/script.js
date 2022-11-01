let openLinks = document.querySelector('.openLinks');
let iconOpenLinks = document.querySelector('.openLinks i');
let secLinks = document.querySelector('.links');

openLinks.addEventListener('click', () => {

    secLinks.classList.toggle('close');

    iconOpenLinks.classList.toggle('fa-bars');
    iconOpenLinks.classList.toggle('fa-xmark');
});