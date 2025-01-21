//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let numberChars = String(number).split('').map((num) => Number(num))
  let numberOfDigits = numberChars.length
  let totalSum = 0

  let numbersToSum = numberChars.map((num) => num ** numberOfDigits)
  for (let i = 0; i < numbersToSum.length; i++) {
    totalSum = totalSum + numbersToSum[i]
  }
  console.log(number)
  console.log(totalSum)
  return number == totalSum
};
