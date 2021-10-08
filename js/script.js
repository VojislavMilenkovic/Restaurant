// Page Transitions
window.onload = () => {
  const transitionElement = document.getElementById('transition');
  const anchors = document.querySelectorAll('.nav-link');

  setTimeout(() => {
    transitionElement.classList.remove('is-active');
  }, 300);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target.href;

      transitionElement.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }
}

//Contact Form Validation

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#textarea');
const sendBtn = document.getElementById('send-button');
const nameErrorWrapper = document.querySelector('.name-error-wrapper');
const emailErrorWrapper = document.querySelector('.email-error-wrapper');
const messageErrorWrapper = document.querySelector('.message-error-wrapper');
const messageSent = document.querySelector('.message-sent');


//validate function
const validateInput = () => {

  //if name is empty or shorter than 5
  if (!inputName.value || inputName.value.length < 5) {
    nameErrorWrapper.textContent = 'Name must have at least five characters!';
    nameErrorWrapper.style.display = 'block';
  } //if email is empty
  else if (!inputEmail.value) {
    emailErrorWrapper.textContent = 'Please enter valid email adress!';
    emailErrorWrapper.style.display = 'block';
  } //if message is empty 
  else if (!inputMessage.value) {
    messageErrorWrapper.textContent = 'Please enter Your message!'
    messageErrorWrapper.style.display = 'block';
  }//message sent
  else {
    nameErrorWrapper.style.display = 'none';
    emailErrorWrapper.style.display = 'none';
    messageErrorWrapper.style.display = 'none';
    messageSent.style.display = 'block';
    messageSent.textContent = "Your Message has been sent!";
  }

};


sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateInput();
})