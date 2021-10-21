const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  // eslint-disable-next-line no-restricted-globals
  const shouldChangePage = confirm('This website might be malicious');
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"');

signupForm.addEventListener('submit', (event) => {
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

photo.addEventListener('click', () => {
  console.log('You clicked the photo');
});
