const names = require('../src/names');

describe('names', () => {
    test('has firstName', () => expect(names).toHaveProperty('firstName'));

    test('has lastName', () => expect(names).toHaveProperty('lastName'));
});
