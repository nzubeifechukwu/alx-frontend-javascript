export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = array.slice();

  for (const item of arrayCopy) {
    array.splice(arrayCopy.indexOf(item), 1, appendString + item);
  }

  return array;
}
