/**
 * Custom 'orderBy' method: Sorts the array based on a specified key and order
 *
 * @param {string} key - The key to sort by
 * @param {string} [order='asc'] - The order to sort ('asc' for ascending, 'desc' for descending)
 * @returns {Array} - A new array sorted based on the specified key and order
 * @throws {TypeError} - Throws an error if the key is not a string or if the order is not 'asc' or 'desc'
 */

export default function (key, order = "asc") {
  if (typeof key !== "string") {
    throw new TypeError(
      `The key must be a string. The given key is the ${typeof key}`
    );
  }
  if (!["asc", "desc"].includes(order)) {
    throw new TypeError('The order must be "asc" or "desc"');
  }

  return this.slice().sort((a, b) => {
    if (a[key] < b[key]) return order === "asc" ? -1 : 1;
    if (a[key] > b[key]) return order === "asc" ? 1 : -1;
    return 0;
  });
}
