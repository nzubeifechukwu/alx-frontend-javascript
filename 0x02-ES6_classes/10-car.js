/**
 * cloneCar method of class Car returns a new object of the class
 */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor();
  }
}
