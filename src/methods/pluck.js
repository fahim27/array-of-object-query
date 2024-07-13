/**
 * Custom 'pluck' method: Returns arrays of values for the specified keys
 *
 * @param {...string} keys - The keys to pluck from each object in the array
 * @returns {Array} - An array containing arrays of values for each specified key
 */
export default function pluck(...keys) {
  return keys.map((key) => this.map((item) => item[key]));
}
