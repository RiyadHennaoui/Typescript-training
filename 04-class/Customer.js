"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    /**
      * getFirstName
: string        */
    get firstname() {
        return this._firstname;
    }
    set firstName(theFirst) {
        this._firstname = theFirst;
    }
    get lastName() {
        return this._lastname;
    }
    set lastName(theLast) {
        this._firstname = theLast;
    }
}
exports.Customer = Customer;
