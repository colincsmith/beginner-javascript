const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// # Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('BUYING ITEM');
// }

// buyButtons.forEach((buyButton) => {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('You clicked it');
//   });
// });
// # event can be named anything
function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // # Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('You clicked the window');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
