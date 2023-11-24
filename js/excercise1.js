let weight = +prompt("Cân nặng");
let height = +prompt("Chiều cao");
let BMI = weight / (height * height);
if (BMI < 18.5) {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Cân nặng thấp gầy"));
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Bình thường"));
} else if (BMI > 25 && BMI < 29.9) {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Tiền béo phì"));
} else if (BMI >= 30 && BMI < 34.9) {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Béo phì độ 1"));
} else if (BMI >= 35 && BMI < 39.9) {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Béo phì độ 2"));
} else {
  console.log(alert("Chỉ số BIM của bạn là: " + BMI + ": Béo phì độ 3"));
}
