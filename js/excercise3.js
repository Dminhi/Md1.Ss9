let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let c = prompt("Mời bạn nhập vào các phép tính(+ - * /)");
let add = a + b;
let sub = a - b;
let divide = a / b;
let multy = a * b;
console.log(c);
switch (c) {
    case "+":
        alert("Kết quả của phép tính trên: a + b = " + add);

        break;
    case "-":
        alert("Kết quả của phép tính trên: a - b = " + sub);

        break;
    case "*":
        alert("Kết quả của phép tính trên: a * b = " + multy);

        break;
    case "/":
        alert("Kết quả của phép tính trên: a / b = " + divide);

        break;

    default:
        break;
}