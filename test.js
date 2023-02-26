const navLinks = document.querySelectorAll('#main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    const offsetTop = section.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  alert(`Thank you, ${name}! Your message "${message}" has been sent.`);
});
const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.textContent = 'Show Password';
  }
});
