"use strict";

class ghost {
  constructor(selector) {
    this._selector = selector;
  }

  set selector(value) {
    return document.querySelector(value);
  }

  //
  get selector () {
    return document.querySelector(this._selector);
  }

  html () {
    return this.selector.innerHTML;
  }
}

// we export the class instance via a function call
module.exports = (selector) => {
  return new ghost (selector);
};
