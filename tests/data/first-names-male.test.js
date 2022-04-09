const firstNames = require('../../src/data/first-names-male');

describe('firstNames', () => {
    test('has expected length', () => expect(firstNames.length).toBe(173));
});
