//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (string) => {
  let arrayOfDigits = []
  let splitString = string.split('')

  for (let d = 0; d < splitString.length; d++) {
    let itemAsNumber = Number(splitString[d])
    if (itemAsNumber || itemAsNumber == 0) {
      arrayOfDigits.push(itemAsNumber)
    }
    else if ((splitString[d] == 'X')) {
      if (d == (splitString.length - 1)) {
        arrayOfDigits.push(10)
      }
      else {
        return false
      }
    }
  }

  console.log(arrayOfDigits)

  if (arrayOfDigits.length < 10 || arrayOfDigits.length > 10 || arrayOfDigits.length == 0) {
    return false
  }

  let totalSum = 0
  for (let i = 0; i < arrayOfDigits.length; i++) {
    totalSum += arrayOfDigits[i] * (arrayOfDigits.length - i)
  }

  return totalSum % 11 == 0
};
