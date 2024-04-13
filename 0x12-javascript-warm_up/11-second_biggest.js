#!/usr/bin/node

const secondBiggest = (args) => {
  if (args.length <= 2) {
    return 0;
  } else {
    const numbers = args.map(arg => parseInt(arg));
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers[1];
  }
};

const args = process.argv.slice(2);

console.log(secondBiggest(args));

