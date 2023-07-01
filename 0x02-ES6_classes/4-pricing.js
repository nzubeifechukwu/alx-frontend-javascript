/**
 * Pricing class uses composition to incorporate Currency class
 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
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
    const dispCurr = new Currency(this._currency._code, this._currency._name);
    return `${this._amount} ${dispCurr.displayFullCurrency()}`;
  }

  // convertPrice static method accepts arguments amount and conversionRate,
  // both of type Number, and returns the amount multiplied by conversionRate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
