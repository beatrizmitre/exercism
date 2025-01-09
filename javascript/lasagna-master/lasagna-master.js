/// <reference path="./global.d.ts" />

import { enableCompileCache } from "module"

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime == 0) {
    return 'Lasagna is done.'
  }
  else if (remainingTime == undefined) {
    return 'You forgot to set the timer.'
  }
  else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer
}

export function quantities(layers) {
  let totalNoodles = 0
  let totalSauce = 0

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] == 'noodles') {
      totalNoodles += 50
    }
    if (layers[i] == 'sauce') {
      totalSauce += 0.2
    }
  }

  return {
    noodles: totalNoodles,
    sauce: totalSauce
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, numberOfPortions = 2) {
  let scaledRecipe = {}
  for (let key in recipe) {
    scaledRecipe[key] = recipe[key] * numberOfPortions/2
  }
  return scaledRecipe
}