 
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var typed= new Typed(".texttt",{
  strings:[ "Frontend Developer","Graphic Designer"],
  typeSpeed:100,
  backSpeed:50,
  backDelay:1000,
  loop:true
});

function sendMail(event) {
  event.preventDefault(); 

  // Fetch values from the form and trim whitespace
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  // Check if any field is empty
  if (name === '' || email === '' || message === '') {
    // Display an alert message
    alert('Please fill out all fields.');
    return; // Exit function if any field is empty
  }

  // Configure your email service ID and template ID from EmailJS dashboard
  const serviceID = 'service_z88m949'; // Replace with your Service ID
  const templateID = 'template_na0gypv'; // Replace with your Template ID

  // Prepare parameters to be sent with the email
  var params = {
    from_name: name,
    reply_to: email,
    message_html: message
  };

  // Send email using EmailJS
  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      // Clear form fields after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      // Display success message to the user
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      // Display an error message to the user
      alert('Oops! An error occurred while sending your message. Please try again later.');
    });
}
