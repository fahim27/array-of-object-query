/**
 * Custom 'min' method: Finds the minimum value of a specified property in an array of objects
 *
 * @param {string} key - The property to find the minimum value of
 * @returns {*} - The minimum value of the specified property in the array, or undefined if the array is empty
 * @throws {TypeError} - Throws an error if the key is not a string or if any object does not have the specified key
 */
const min = function (key) {
  if (typeof key !== "string") {
    throw new TypeError(
      `The key must be a string. The given key is the ${typeof key}`
    );
  }

  if (this.length === 0) return undefined;

  let minValue = this[0][key];
  for (let i = 1; i < this.length; i++) {
    if (this[i][key] < minValue) {
      minValue = this[i][key];
    }
  }

  return minValue;
};

export default min;
