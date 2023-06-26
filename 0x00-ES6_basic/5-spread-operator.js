/**
 * Using spread syntax, concatenate two arrays and each character of a string
 * given as parameters of a function
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
