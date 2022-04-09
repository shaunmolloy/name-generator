const getRandom = require('./helper/random');
const firstNames = require('./data/first-names-male');
const lastNames = require('./data/last-names');

module.exports = {
    firstName: getRandom(firstNames),
    lastName: getRandom(lastNames),
}
