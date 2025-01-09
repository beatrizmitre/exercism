// @ts-check

import { arrayBuffer } from "stream/consumers"

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstValue = Number(array1.join(''))
  let secondValue = Number(array2.join(''))
  return firstValue + secondValue
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let array = String(value).split('').map(Number)
  return array.join() == array.reverse().join()
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == '' || input == null || input == undefined) {
    return 'Required field'
  }
  else if (!Number(input)) {
    return 'Must be a number besides 0'
  }
  else {
    return ''
  }
}
