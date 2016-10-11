class Rectangle {
  constructor(width, height, el) {
    this.width = width;
    this.height = height;
    this.element = el;
  }

  set element(value) {
    return document.querySelector(value);
  }

  //
  get element () {
    return this._element;
  }

  content () {
    return this.element.innerHTML;
  }
}

// We export the Rectangle class so it can
// be require()'d in other files.
module.exports = (w, h, element) => {
  return new Rectangle(w, h, element);
};
