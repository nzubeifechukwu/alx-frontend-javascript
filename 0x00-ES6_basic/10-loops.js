export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = array.slice();

  for (const item of arrayCopy) {
    arrayCopy.splice(array.indexOf(item), 1, appendString + item);
  }

  return arrayCopy;
}
