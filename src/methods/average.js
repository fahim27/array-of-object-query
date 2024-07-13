/**
 * Custom 'average' method: Calculates the average value of a specified numeric property in an array of objects
 *
 * @param {string} key - The property to calculate the average of (must be numeric)
 * @returns {number} - The average value of the specified property across all objects in the array, or NaN if the array is empty or if any object does not have the specified key or if the value is not numeric
 * @throws {TypeError} - Throws an error if the key is not a string, or if any object does not have the specified key or if the value is not numeric
 */
const average = function (key) {
  if (typeof key !== "string") {
    throw new TypeError("The key must be a string");
  }

  if (this.length === 0) {
    return NaN;
  }
  const sum = this.reduce((total, currentObj) => {
    if (!(key in currentObj) || typeof currentObj[key] !== "number") {
      throw new TypeError(`Object does not have numeric property '${key}'`);
    }
    return total + currentObj[key];
  }, 0);

  return sum / this.length;
};

export default average;
