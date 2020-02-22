// Constructor for Letter
function Letter(input) {
    this.input = input;
    this.guessed = false;
    this.check = function (data) {
        if (data === this.input) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    }
    console.log(this.input);
    console.log(this.guessed);
    this.display = function (guessed) {
        if (this.guessed === false) {
            return "_";
        } else {
            return this.input;
        };
    };
}
module.exports = Letter;

