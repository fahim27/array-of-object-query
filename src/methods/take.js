/**
 * Custom 'take' method: Retrieves a specified number of elements from the beginning of the array
 *
 * @param {number} n - The number of elements to retrieve
 * @returns {Array} - An array containing the first 'n' elements from the original array
 */
const take = function (n) {
  if (typeof n !== "number" || n < 0) {
    throw new TypeError("Parameter n must be a non-negative number");
  }
  return this.slice(0, n);
};

export default take;
