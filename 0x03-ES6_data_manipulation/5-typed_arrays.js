/**
 * function createInt8TypedArray(length, position, value)
 * @length is length of the ArrayBuffer
 * @position is position of ArrayBuffer where @value will be inserted
 * @value is Int8 value to insert at @position
 * Return new ArrayBuffer with an Int8 value at a specific position
 * Throw error if @value cannot be inserted
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  view.setInt8(position, value);

  return view;
}
