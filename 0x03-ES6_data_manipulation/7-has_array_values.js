/**
 * function hasValuesFromArray(set, array)
 * @set is a set
 * @array is an array
 * Returns a true if all elements in @array are in @set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
}
