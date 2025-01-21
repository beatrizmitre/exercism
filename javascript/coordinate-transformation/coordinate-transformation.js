// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { dirxml } from "console"

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

let px = 0
let py = 0

export function translate2d(dx, dy) {
  return function moveCoordinatesRight2Px(px, py) {
    return [dx + px, dy + py]
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function doubleScale(px, py) {
    return [px * sx, py * sy]
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function composedTransformations(dx, dy) {
    let movedCoordinates = f(dx, dy)
    return g(movedCoordinates[0], movedCoordinates[1])
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */

export function memoizeTransform(f) {

  let lastRecord = {x: undefined, y: undefined, result: undefined}

  return function memoizedTransform(x, y) {
    if (lastRecord.x == x && lastRecord.y == y) {
      return lastRecord.result
    }
    else {
      lastRecord.x = x
      lastRecord.y = y
      lastRecord.result = f(x, y)
      return lastRecord.result
    }
  }
}
