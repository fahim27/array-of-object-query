/**
 * Custom 'distinct' method: Returns an array containing distinct values of a specified property across all objects in the array
 *
 * @param {string} key - The property to find distinct values of
 * @returns {Array} - An array of distinct values of the specified property
 */
const distinct = function (key) {
  const seen = new Set();
  return this.reduce((result, currentObj) => {
    const value = currentObj[key];
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
    return result;
  }, []);
};

// Array.prototype["distinct"]=distinct;
export default distinct;
