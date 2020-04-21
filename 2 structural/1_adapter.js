class OldCalculator {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'sub': return t1 - t2;
            default: return NaN;
        }
    }
}

class NewCalculator {
    add(t1, t2){
         return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter  {
    constructor() {
        this.calc = new NewCalculator()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'sub': return this.calc.sub(t1, t2);
            default: return NaN;
        }
    }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.operations(10, 5, 'add'));