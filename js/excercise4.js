let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let c = +prompt("Mời bạn nhập vào số c");
if (a > b && b > c) {
    console.log("Max là: " + a, "Min là: " + c);
} else {
    if (a > b && c > b) {
        console.log("Max la: " + a, "Min la: " + b);
    } else if (b > a && a > c) {
        console.log("Max la: " + b, "Min la: " + c);
    } else if (b > c && c > a) {
        console.log("Max la: " + b, "Min la: " + a);
    } else if (c > b && b > a) {
        console.log("Max la: " + c, "Min la: " + a);
    } else {
        console.log("Max la: " + c, "Min la: " + b);
    }
}