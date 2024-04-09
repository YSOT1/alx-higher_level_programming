#!/usr/bin/node

const value = parseInt(process.argv[2]);

if (Number.isInteger(value)) {
    console.log(`My number: ${value}`);
} else {
    console.log('Not a number');
}

