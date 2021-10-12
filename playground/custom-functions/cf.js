// Function definition
function calculateBill(billAmount, taxRate) {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount * (1 + taxRate);
  return total;
}

// Function call. Or **Run**
// const myTotal = calculateBill(100, 0.13);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Colin');
console.log(greeting);
