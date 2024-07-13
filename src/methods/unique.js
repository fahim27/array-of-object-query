/**
 * Custom 'unique' method: Returns an array containing unique objects based on a specified key
 *
 * @param {string} key - The key to determine uniqueness
 * @returns {Array} - An array of unique objects based on the specified key
 */
const unique = function (key) {
  const seen = new Set();
  return this.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

export default unique;
