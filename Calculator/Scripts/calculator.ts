window.onload = function () {
    var calc = new Calculator('X','Y','Output');
};

class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLDivElement;

    constructor(xId: string, yId: string, outputId: string) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId) as HTMLInputElement;
        this.y = document.getElementById(yId) as HTMLInputElement;
        this.output = document.getElementById(outputId) as HTMLDivElement;
        
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
        
    }

    wireEvents() {
      //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
      //       I implementira njihovu funkcionalnost
      document.getElementById("Add").addEventListener("click", () => {
          this.output.innerHTML = this.add();
      });
      document.getElementById("Subtract").addEventListener("click", () => 
        {this.output.innerHTML = this.subtract();}
      );
      document.getElementById("Multiply").addEventListener("click", () => {this.output.innerHTML = this.multiply()});

      document.getElementById("Divide").addEventListener("click", () => {this.output.innerHTML = this.divide()});
    }

    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    add(): string {
        let xValue = this.x.value;
        let yValue = this.y.value;
        let x = Number(xValue);
        let y = Number(yValue);

        return (x + y).toFixed(2);
    }
    subtract():string{
        let x = this.x.value;
        let y = this.y.value;

        return (Number(x)-Number(y)).toFixed(2);
    }
    multiply():string{
        let x = this.x.value;
        let y = this.y.value;

        return (Number(x)*Number(y)).toFixed(2);
    }
    divide():string{
        let x = this.x.value;
        let y = this.y.value;
        return (Number(x)/Number(y)).toFixed(2);
    }
    
}



