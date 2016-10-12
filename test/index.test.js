import chai, { expect } from "chai";
import path from "path";

require('jsdom-global')()

// Import the ghost class instance.
import ghost from "../src/App.es6";

chai.should();

// create mock html tag
document.body.innerHTML = "<div>Call Me</div>";

describe('#Ghost Library Test', function () {

  let Ghost;

  beforeEach(function () {
    Ghost = ghost('div');
  });

  describe('#Element', function () {
    it('should be an object', function () {
      Ghost.selector.should.be.an('object');
    });
  });

  describe('#DivContent', function () {
    it('should be a string', function () {
      Ghost.html().should.be.a('string');
    });

    it('should equal call me', function () {
      Ghost.html().should.equal('Call Me');
    });
  });

});
