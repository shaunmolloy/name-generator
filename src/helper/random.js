module.exports = function getRandom(input) {
    return input[Math.floor((Math.random() * input.length))];
}
