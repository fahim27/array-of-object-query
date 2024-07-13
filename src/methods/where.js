/**
 * Custom 'where' method: Filters the array based on a key-value pair
 *
 * @param {string} key - The key to check in each object
 * @param {*} value - The value to check against
 * @returns {Array} - A new array of objects that have the specified key's value matching the given value
 * @throws {TypeError} - Throws an error if the key is not a string or if the value is undefined
 */

export default function where(key, value) {
  if (typeof key !== "string") {
    throw new TypeError("The key must be a string");
  }
  if (value === undefined) {
    throw new TypeError("The value must be defined");
  }

  return this.filter((item) => item[key] === value);
}
