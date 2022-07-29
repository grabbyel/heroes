var Add = /** @class */ (function () {
    function Add(x) {
        this.x = x;
    }
    Add.prototype.run = function (y) {
        return y + this.x;
    };
    return Add;
}());
var Sub = /** @class */ (function () {
    function Sub(x) {
        this.x = x;
    }
    Sub.prototype.run = function (y) {
        return y - this.x;
    };
    return Sub;
}());
var Mul = /** @class */ (function () {
    function Mul(x) {
        this.x = x;
    }
    Mul.prototype.run = function (y) {
        return y * this.x;
    };
    return Mul;
}());
var Div = /** @class */ (function () {
    function Div(x) {
        this.x = x;
    }
    Div.prototype.run = function (y) {
        return y / this.x;
    };
    return Div;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.result = 0;
    }
    //Tipo con la interfaz en vez de una operación en concreto
    Calculator.prototype.solve = function (operation) {
        this.result = operation.run(this.result);
        return this;
    };
    return Calculator;
}());
var calculator = new Calculator();
var result = calculator
    .solve(new Add(5))
    .solve(new Mul(3))
    .solve(new Sub(9))
    .solve(new Div(6))
    .solve(new Add(1))
    .result;
console.log(result);
