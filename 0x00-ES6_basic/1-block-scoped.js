export default function taskBlock(trueOrFalse) {
  var task = false;  // eslint-disable-line
  var task2 = true;  // eslint-disable-line

  if (trueOrFalse) {
    const task = true;  // eslint-disable-line
    const task2 = false;  // eslint-disable-line
  }

  return [task, task2];
}
