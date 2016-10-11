import chai, { expect } from "chai";
import path from "path";
import jsdom from "jsdom";

// Import the Rectangle class.
import Rectangle from "../src/App.es6";

chai.should();

const html = path.join(__dirname, "index.html");

function execdom (callback) {
  jsdom.env(html, (err, window) => {
    callback();
  });
}

describe('#Library Test', () => {
  let rectangle;

  beforeEach(() => {
    execdom(() =>{
      rectangle = Rectangle(10, 20, 'div');
    });
  });

});


describe('#Element', () => {
  it('should be an object', () => {
    execdom(() =>{
      rectangle.element.should.be.an('object');
    });
  });
});

describe('#DivContent', () => {
  it('should be a string', () => {
    execdom(() =>{
      rectangle.content().should.be.a('string');
    });
  });

  it('should equal call me', () => {
    execdom(() =>{
      rectangle.content().should.equal('Call Me');
    });
  });
});
