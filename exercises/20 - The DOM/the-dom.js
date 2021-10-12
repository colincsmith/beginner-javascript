// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div.item');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// heading.textContent = 'Colin is Cool';
// console.dir(heading.textContent);
// console.log(heading.innerText);

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
pic.width = 200;

// pic.setAttribute('alt', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));
