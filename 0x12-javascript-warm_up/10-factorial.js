#!/usr/bin/node

const factorial = (num) => {
  // Base case: factorial of NaN or 0 is 1
  if (isNaN(num) || num === 0) {
    return 1;
  } else {
    // Recursive case: compute factorial
    return num * factorial(num - 1);
  }
};

const num = process.argv[2] ? parseInt(process.argv[2]) : NaN;

console.log(factorial(num));

