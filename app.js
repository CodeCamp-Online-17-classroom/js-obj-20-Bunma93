// write code here

let calculator = {
    read: function read() {
        this.num1 = Number(prompt("ตัวเลขที่ 1"));
        this.num2 = Number(prompt("ตัวเลขที่ 2"));
    },
    sum: function sum() {
        return this.num1+this.num2;
    },
    mul: function mul() {
        return this.num1*this.num2;
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());