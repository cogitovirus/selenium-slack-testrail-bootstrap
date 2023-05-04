const { expect } = require('chai');

describe('Example Mocha test', () => {
  it('should pass when the test is correct 2', () => {
    const a = 2;
    const b = 3;
    const sum = a + b;

    expect(sum).to.equal(5);
  });
});
