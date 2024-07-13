/**
 * Custom 'last' method: Retrieves the last element of the array
 *
 * @returns {*} - The last element of the array, or undefined if the array is empty
 */
export default function last() {
  return this.length > 0 ? this[this.length - 1] : undefined;
}
