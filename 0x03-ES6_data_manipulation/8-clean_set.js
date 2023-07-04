/**
 * function cleanSet(set, startString)
 * @set is a set of strings
 * @startString is a str compared with all words in @set to know which words start with @startString
 * Return str of words in @set dat start with @startString, with @startString removed for each word
 */
export default function cleanSet(set, startString) {
  const truncStrings = [];

  if (startString.length > 0) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        truncStrings.push(item.replace(startString, ''));
      }
    }
  }

  return truncStrings.join('-');
}
