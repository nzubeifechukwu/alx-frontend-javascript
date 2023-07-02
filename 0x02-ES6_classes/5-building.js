/**
 * Builidng is an abstract class. Any class that extends from it must implement
 * the evacuationWarningMessage method
 */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // throw error if subclass does not overwrite evacuationWarningMessage method
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
  }
}
