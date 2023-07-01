/**
 * Pricing class extends Currency class
 */
import Currency from './3-currency'

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency);
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // displayFullPrice method returns attributes in the
  // format `amount currency_name (currency_code)`
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // convertPrice static method accepts arguments amount and conversionRate,
  // both of type Number, and returns the amount multiplied by conversionRate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
