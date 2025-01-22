//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nthPrime) => {
  function isPrimeNumber(number) {

    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 === 0 || number % 3 === 0) return false

    const numberSquareRoot = Math.sqrt(number)
    for (let i = 3; i <= numberSquareRoot; i++) {
      if (number % i === 0) return false
    }
    return true
  }

  if (nthPrime == 0) {
    throw new Error('there is no zeroth prime')
  }
  let beforeNthPrime = []
  for (let i = 2; beforeNthPrime.length < nthPrime; i++) {
    if (isPrimeNumber(i)) {
      beforeNthPrime.push(i)
    }
  }

  return beforeNthPrime[beforeNthPrime.length - 1]
};

