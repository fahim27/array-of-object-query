/**
 * Custom 'max' method: Finds the maximum value of a specified property in an array of objects
 *
 * @param {string} key - The property to find the maximum value of
 * @returns {*} - The maximum value of the specified property in the array, or undefined if the array is empty
 * @throws {TypeError} - Throws an error if the key is not a string or if any object does not have the specified key
 */
const max = function (key) {
  if (typeof key !== "string") {
    throw new TypeError("The key must be a string");
  }

  if (this.length === 0) return undefined;

  let maxValue = this[0][key];
  for (let i = 1; i < this.length; i++) {
    if (this[i][key] > maxValue) {
      maxValue = this[i][key];
    }
  }

  return maxValue;
};

export default max;
