/**
 * function updateUniqueItems(map)
 * @map is a map of items and their quantities
 * Return an updated map with all quantities equal to 1 in @map now equal to 100
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
