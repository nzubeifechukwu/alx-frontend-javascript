/**
 * Pricing class uses composition to incorporate Currency class
 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // the next line is not necessary but I add it because eslint complains
    // that Currency is defined but not used. I can delete it and change and
    // curr in `this._currency = curr` to `this._currency = currency`
    const curr = new Currency(currency._code, currency._name);
    this._amount = amount;
    this._currency = curr;
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
