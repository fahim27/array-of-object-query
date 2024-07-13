/**
 * Custom 'first' method: Retrieves the first element of the array
 *
 * @returns {*} - The first element of the array, or undefined if the array is empty
 */
export default function first() {
  return this.length > 0 ? this[0] : undefined;
}
