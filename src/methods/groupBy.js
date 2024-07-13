/**
 * Custom 'groupBy' method: Groups elements of an array based on a specified key
 *
 * @param {string} key - The key to group by
 * @returns {Object} - An object where keys are unique values of the specified property and values are arrays of objects with matching property values
 */
const groupBy = function (key) {
  return this.reduce((result, currentObj) => {
    const groupKey = currentObj[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentObj);
    return result;
  }, {});
};

export default groupBy;
