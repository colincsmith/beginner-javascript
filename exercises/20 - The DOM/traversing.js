const colin = document.querySelector('.colin');

// console.log(colin.children);
// console.log(colin.firstElementChild);
// console.log(colin.lastElementChild);
// console.log(colin.previousElementSibling);
// console.log(colin.nextElementSibling);
// console.log(colin.parentElement);

// # use .remove to remove elements

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
