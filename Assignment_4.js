class FractionException extends Error {
    constructor(message) {
        super(`fraction can't be zero!, ${message}`);
        this.name = "FractionException";
    }
}
function Fraction(value) {
    if (value === 0) {
        throw new FractionException('on create')
    }
    this.value = value;
}

Fraction.prototype.nominator = function () {
    this.value += 1;
}
Fraction.prototype.denominator  = function () {
    if (this.value === 1) {
        throw new FractionException('on denominate')
    }
    this.value -= 1;
}
Fraction.prototype.devide = function (otherFraction) {
    return new Fraction(this.value / otherFraction.value)
}

let a = new Fraction(1);
// new Fraction(0);
// a.denominator();
let b = new Fraction(1);
b.nominator();
let c = new Fraction(4);
console.log(c.devide(b).value);
