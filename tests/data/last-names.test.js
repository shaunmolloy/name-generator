const lastNames = require("../../src/data/last-names");

describe('lastNames', () => {
    test('has expected length', () => expect(lastNames.length).toBe(85));
});
