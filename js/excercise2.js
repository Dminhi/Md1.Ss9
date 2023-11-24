let key = +prompt("Mời nhập tháng vào");

switch (key) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(alert("Tháng " + key + " Có 31 ngày"));
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(alert("Tháng " + key + " Có 30 ngày"));
        break;
    case 2:
        let year = +prompt("Mời bạn nhập năm");
        let flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

        if (flag) {
            console.log(alert(year + "Tháng " + key + " Có 29 ngày"));
        } else {
            console.log(alert(year + "Tháng " + key + " Có 28 ngày"));
        }
        break;

    default:
        break;
}