# @h-Reser/deferred
[![Build Status](https://travis-ci.com/h-Reser/deferred.png?branch=master)](https://travis-ci.com/h-Reser/deferred)
[![npm version](https://badge.fury.io/js/%40h-reser%2Fdeferred.svg)](https://badge.fury.io/js/%40h-reser%2Fdeferred)
[![dependencies Status](https://david-dm.org/h-Reser/deferred/status.svg)](https://david-dm.org/h-Reser/deferred)
[![devDependencies Status](https://david-dm.org/h-Reser/deferred/dev-status.svg)](https://david-dm.org/h-Reser/deferred?type=dev)

A lightweight deferred implementation with Typescript support, inspired by jQuery and based on Javascript's Promise.

## Usage
```
const Deferred = require("../deferred").default;

// Create deferred object
const d = new Deferred();

// Implement logic
function playLottery() {
  setTimeout(() => {
    const random = Math.floor(Math.random() * Math.floor(2));
    if (random === 1)
      d.resolve("You have won!");
    else d.reject("You have lost...");
  }, 500);
};

// Handle Defered fulfillments and rejections
d
  .then((res) => {
    console.log(res + " :)");
  })
  .catch((e) => {
    console.error(e + " :(");
  });

// Execute logic
playLottery();
```

## When to use
Can be used in any environment which supports ES6's promises