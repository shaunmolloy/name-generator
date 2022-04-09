const getRandom = require('../../src/helper/random');

describe('random', () => {
    describe('getRandom', () => {
        global.Math.random = () => 0;
        const values = [ 'one', 'two', 'three' ];

        test('has random value', () => expect(getRandom(values)).toBe('one'));
    })
});
