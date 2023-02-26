// Get the form and submit button elements
const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

// Add an event listener to the form submit button
submitButton.addEventListener('click', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send a POST request to the server with the form data
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Display a success message to the user
    alert('Form submitted successfully!');
    form.reset();
  })
  .catch(error => {
    // Display an error message to the user
    alert('An error occurred while submitting the form. Please try again later.');
  });
});
