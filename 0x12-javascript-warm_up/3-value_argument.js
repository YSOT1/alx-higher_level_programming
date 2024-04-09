#!/usr/bin/node

// Get the first argument passed to the script
const arg = process.argv[2];

if (arg) {
  console.log(arg);
} else {
  console.log("No argument");
}

