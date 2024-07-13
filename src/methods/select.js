/**
 * Custom 'select' method: Creates a new array with only the specified keys
 *
 * @param {...string} keys - The keys to select from each object in the array
 * @returns {Array} - A new array of objects containing only the specified keys
 */
export default function select(...keys) {
  return this.map((item) => {
    const newItem = {};
    keys.forEach((key) => {
      if (key in item) {
        newItem[key] = item[key];
      }
    });
    return newItem;
  });
}
