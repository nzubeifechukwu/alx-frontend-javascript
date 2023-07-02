/**
 * Builidng is an abstract class. It cannot be instantiated, and any class that
 * extends from it must implement the evacuationWarningMessage method
 */
export default class Building {
  constructor(sqft) {
    // if (this.constructor === Building) {
    // throw new Error('Object of abstract class Building cannot be created');
    // }
    this._sqft = sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
