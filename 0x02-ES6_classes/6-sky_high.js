/**
 * SkyHighBuilding class extends Building
 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super();
    this._sqft = new Building(sqft)._sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() { // eslint-disable-line
    return 'Evacuate slowly the 60 floors';
  }
}
