//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (string) => {
  let arrayOfDigits = []
  let splitString = string.split('').filter((item) => item != '-')

  for (let i = 0; i < splitString.length; i++) {
    let itemAsNumber = Number(splitString[i])
    if (isNaN(splitString[i])) {
      if (splitString[i] == 'X' && (i == splitString.length - 1)) {
        arrayOfDigits.push(10)
      }
      else {
        return false
      }
    }
    else {
      arrayOfDigits.push(splitString[i])
    }
  }

  if (arrayOfDigits.length < 10 || arrayOfDigits.length > 10 || arrayOfDigits.length == 0) {
    return false
  }

  let totalSum = 0
  for (let i = 0; i < arrayOfDigits.length; i++) {
    totalSum += arrayOfDigits[i] * (arrayOfDigits.length - i)
  }

  return totalSum % 11 == 0
};
