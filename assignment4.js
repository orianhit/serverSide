class FractionException extends Error {
    constructor(message) {
        super(message);
        this.name = "FractionException";
    }
}
function Fraction(nominator, denominator) {
    if (denominator === 0) {
        throw new FractionException('denominator can\'t be 0')
    }
    this.nominator = nominator;
    this.denominator = denominator;
}

Fraction.prototype.devide = function (other) {
    return new Fraction(this.nominator * other.denominator, this.denominator * other.nominator)
}

let a = new Fraction(0, 2);
// new Fraction(1, 0);
let b = new Fraction(2 , 1);
let c = new Fraction(1, 2);
let d = b.devide(c);
console.log(d.nominator);
console.log(' / ')
console.log(d.denominator);
