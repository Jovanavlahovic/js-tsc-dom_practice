window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
var Calculator = /** @class */ (function () {
    function Calculator(xId, yId, outputId) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
        //       I implementira njihovu funkcionalnost
        document.getElementById("Add").addEventListener("click", function () {
            _this.output.innerHTML = _this.add();
        });
        document.getElementById("Subtract").addEventListener("click", function () { _this.output.innerHTML = _this.subtract(); });
        document.getElementById("Multiply").addEventListener("click", function () { _this.output.innerHTML = _this.multiply(); });
        document.getElementById("Divide").addEventListener("click", function () { _this.output.innerHTML = _this.divide(); });
    };
    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    Calculator.prototype.add = function () {
        var xValue = this.x.value;
        var yValue = this.y.value;
        var x = Number(xValue);
        var y = Number(yValue);
        return (x + y).toFixed(2);
    };
    Calculator.prototype.subtract = function () {
        var x = this.x.value;
        var y = this.y.value;
        return (Number(x) - Number(y)).toFixed(2);
    };
    Calculator.prototype.multiply = function () {
        var x = this.x.value;
        var y = this.y.value;
        return (Number(x) * Number(y)).toFixed(2);
    };
    Calculator.prototype.divide = function () {
        var x = this.x.value;
        var y = this.y.value;
        return (Number(x) / Number(y)).toFixed(2);
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map