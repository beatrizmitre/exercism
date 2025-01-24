//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const promisify = (functionToBePromisified) => {
  return function (args) {
    return new Promise((resolve, reject) => {
      functionToBePromisified(args, (error, data) => {
        if (error) {
          reject(error)
        }
        else {
          resolve(data)
        }
      })
    })
  }
}

export function all(promises) {
  return new Promise((resolve, reject) => {
    let results = []
    let completedPromises = 0


    if (promises === undefined) {
      return resolve()
    }
    else if (promises.length === 0) {
      return resolve(results)
    }


    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

export const allSettled = (promises) => {
  return new Promise(resolve => {
    const results = [];
    let completedPromises = 0;

    if (promises === undefined) {
      return resolve()
    }
    else if (promises.length === 0) {
      return resolve(results)
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch(reason => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises === undefined) return resolve()
    if (promises.length === 0) return resolve([])

    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejected = 0;

    if (promises.length === 0) { return resolve([])}

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(error => {
          errors[index] = error
          rejected++
          errors.push([new Error('Failed callback')])

          if (rejected === promises.length) {
            reject(new Error('Failed callback'));
          }
        });
    });
  });
};
