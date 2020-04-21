class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities(){

    }

    work() {
        return `${this.name} does ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} earns ${this.salary}`;
    }
}

class Developer extends Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return ` software development`;
    }
}

class Tester extends Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return ` software testing`;
    }
}

const dev = new Developer('John', 45000);
const qa = new Tester('Bran', 40000);

console.log(dev.getPaid());
console.log(dev.work());
console.log(qa.getPaid());
console.log(qa.work());