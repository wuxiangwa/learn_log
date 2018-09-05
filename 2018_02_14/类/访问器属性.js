class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(value) {
    this.element.innerHTML = value;
  }
}

var descripor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");

console.log(descripor);
