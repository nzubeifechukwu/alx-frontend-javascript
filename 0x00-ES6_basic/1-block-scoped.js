/**
 * Modify the variables inside the function taskBlock so that the 
 * variables aren’t overwritten inside the conditional block.
 */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;  // initially re-declared with var
    let task2 = false;  // initially re-declared with var
  }

  return [task, task2];
}
