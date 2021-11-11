const terms = document.querySelector('.terms-and-conditions');

terms.addEventListener('scroll', (e) => {
  console.log(e.currentTarget.scrollTop);
  console.log(e.currentTarget.scrollHeight);
});
