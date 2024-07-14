/**
 * Custom 'whereIn' method: Filters the array based on whether the value of a specified key is included in a given array of values
 *
 * @param {string} key - The key to check in each object
 * @param {Array} values - The array of values to check against
 * @returns {Array} - A new array of objects that have the specified key's value in the given array of values
 * @throws {TypeError} - Throws an error if the key is not a string or if values is not an array
 */
export default function whereIn(key, values) {
  if (typeof key !== "string") {
    throw new TypeError(`The key must be a string. The given key is the ${typeof key}`);
  }
  if (!Array.isArray(values)) {
    throw new TypeError("The values must be an array");
  }

  return this.filter((item) => values.includes(item[key]));
}
