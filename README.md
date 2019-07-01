# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @grant-murphy/lotide`

**Require it:**

`const _ = require('@grant-murphy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1,arr2)`: Compares & Evaluates if two arrays are equal.
* `assertEqual(actual, expected)`: Compares & Evaluates if two parameters are equal.
* `assertObjectsEqual(actual, expected)`: Compares & Evaluates if two objects are equal.
* `countLetters(letterCount)`: Counts how many times a letter reoccurs in a string.
* `countOnly(allItems, itemsToCount)`: Counts how many times a name reoccurs in an object.
* `eqArrays(arr1, arr2)`: Compares if two arrays are equal.
* `eqObjects(object1, object2)`: Compares if two objects are equal.
* `findKey(obj, fun)`: Located the key name using a given function.
* `findKeyByValue(object, value)`: Locates the key name using the keys value.
* `flatten(array)`: Transforms an array with multiple nested arrays into one single array.
* `head(array)`: Returns the first value of an array.
* `map(array, callback)`: Compares two arrays by the first letter of each string in the array.
* `middle(arr)`: Returns the middle value of an array (even array = 2 values) & (odd array = 1 value).
* `tail(value)`: Returns everything but the first value of an array.
* `takeUntil(array, callback)`: Returns all the values in an array until you reach a specified value.
* `without(source, itemsToRemove)`: Returns values that don't match.g
