/**
 * Custom Array Methods
 *
 * This module exports an object `methods` that contains custom array methods
 * for manipulating arrays of objects. Each method is imported from its respective
 * file and included in the `list` property of the `methods` object.
 *
 * Methods:
 * - `where`: Filters the array based on key-value pairs.
 * - `whereIn`: Filters the array where a key's value is in an array of values.
 * - `select`: Creates a new array with objects containing only the specified keys.
 * - `pluck`: Returns arrays of values for specified keys from each object in the array.
 * - `orderBy`: Sorts the array of objects based on a specified key and order.
 * - `first`: Retrieves the first element of the array.
 * - `last`: Retrieves the last element of the array.
 * - `min`: Finds the minimum value of a specified numeric property across all objects.
 * - `max`: Finds the maximum value of a specified numeric property across all objects.
 * - `take`: Retrieves a specified number of elements from the beginning of the array.
 * - `sum`: Calculates the sum of a specified numeric property across all objects.
 * - `groupBy`: Groups elements of the array based on a specified key.
 * - `average`: Calculates the average value of a specified numeric property across all objects.
 * - `unique`: Returns an array of unique objects based on a specified key.
 * - `distinct`: Returns an array of distinct values of a specified property across all objects.
 *
 * Usage:
 * import methods from "./methods"; // Import the custom methods object
 * const { where, select, orderBy } = methods.list; // Destructure methods for use
 * const filtered = people.where('age', 30); // Example usage of where method
 *
 * Note: Ensure all methods are properly implemented and tested for expected behavior.
 */
import first from "./methods/first";
import last from "./methods/last";
import select from "./methods/select";
import orderBy from "./methods/orderBy";
import where from "./methods/where";
import whereIn from "./methods/whereIn";
import pluck from "./methods/pluck";
import take from "./methods/take";
import min from "./methods/min";
import max from "./methods/max";
import sum from "./methods/sum";
import average from "./methods/average";
import groupBy from "./methods/groupBy";
import unique from "./methods/unique";
import distinct from "./methods/distinct";

// Define a methods object containing custom array methods and their names
const methods = {
  where,
  whereIn,
  select,
  pluck,
  orderBy,
  first,
  last,
  min,
  max,
  take,
  sum,
  groupBy,
  average,
  unique,
  distinct,
};

/**
 * Extend Array Prototype with Custom Methods
 *
 * This immediately-invoked function expression (IIFE) extends the Array prototype
 * by adding custom methods that allow for more convenient querying and manipulation
 * of arrays of objects. The methods to be added are imported from the './methods' module.
 */
(function extendArrayPrototype() {
  // Iterate over the method names defined in the 'methods' module
  Object.entries(methods).forEach(([methodName, methodRef]) => {
    // Check if the method is not already defined on Array.prototype
    if (!Array.prototype[methodName]) {
      // Assign the method to Array.prototype
      Array.prototype[methodName] = methodRef;
    }
  });
})();

export default methods;
