A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @John-MBDP/lotide`

**Require it:**

`const _ = require('@John-MBDP/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual`: Custom function to test if both arrays are equal
- `assertEqual`: Custom function to help test codes within the files
- `countLetters`: Accepts a string and returns an object with key value pairs, showing the number of times it occured in the string
- `countOnly`: Accepts an array of string and returns a specific count
- `eqArrays`: Accepts two arrays and returns true or false based on if both arrays are equal to each other
- `eqObjects`: Accepts two objects and returns true or false based on if both objects are equal to each other
- `findKeyByValue`: Has two parameters which accepts an object and a value. Goes throught he object and returns the key which contains the provided value
- `findKey`: Accepts two parameters (object, callback) accepts an object, and callback returns the key that has a truthy value
- `flatten`: One parameter that accepts an array. Checks if there are nested arrays, and if there is, it returns a flattened version of that array
- `head`: returns the first element of an array
- `letterPositions`: Accepts one parameter (string). Returns an object with all of the indexes where each character was found
- `map`: One parameter that accepts an array and a function. Create a new array based on calling the function on each element in the array
- `middle`: One parameter that accepts an array and returns the middle elements
- `tail`: One parameter that accepts an array and returns the original array, but without the first element
- `takeUntil`: Two parameters (array, callback). returns an array with all the items from the original array until the callback function returns a truthy value
- `without`: One parameter that accepts an array of items to remove. Returns an array with removed elements
