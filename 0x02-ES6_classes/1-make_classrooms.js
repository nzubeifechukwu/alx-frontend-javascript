/**
 * Function initializeRooms should return an array of 3 ClassRoom objects with
 * sizes 19, 20 and 34
 */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
