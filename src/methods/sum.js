/**
 * Custom 'sum' method: Calculates the sum of a specified numeric property in an array of objects
 *
 * @param {string} key - The property to calculate the sum of (must be numeric)
 * @returns {number} - The sum of the specified property across all objects in the array, or 0 if the array is empty
 * @throws {TypeError} - Throws an error if the key is not a string, or if any object does not have the specified key or if the value is not numeric
 */
const sum = function (key) {
  if (typeof key !== "string") {
    throw new TypeError("The key must be a string");
  }

  if (this.length === 0) {
    return 0;
  }

  return this.reduce((total, currentObj) => {
    if (!(key in currentObj) || typeof currentObj[key] !== "number") {
      throw new TypeError(`Object does not have numeric property '${key}'`);
    }

    return total + Number(currentObj[key]);
  }, 0);
};

export default sum;
