let month = +prompt("Mời bạn nhập tháng sinh: ");
let day = +prompt("Mời bạn nhập ngày sinh:  ");
switch (month) {
  case 1:
    alert(day <= 19 ? "Bạn là Ma Kết" : "Bạn là Bảo bình");
    break;
  case 2:
    alert(day <= 18 ? "Bạn là Bảo Bình" : "Bạn là Song Ngư");
    break;
  case 3:
    alert(day <= 20 ? "Bạn là Song Ngư" : "Bạn là Bạch Dương");

    break;
  case 4:
    alert(day <= 19 ? "Bạn là Bạch Dương" : "Bạn là Kim Ngưu");

    break;
  case 5:
    alert(day <= 20 ? "Bạn là Kim Ngưu" : "Bạn là Song tử");

    break;
  case 6:
    alert(day <= 21 ? "Bạn là Song tử" : "Bạn là Cự Giải");

    break;
  case 7:
    alert(day <= 22 ? "Bạn là Cự Giải" : "Bạn là Sư Tử");

    break;
  case 8:
    alert(day <= 22 ? "Bạn là Sư Tử" : "Bạn là Xử Nữ");

    break;
  case 9:
    alert(day <= 22 ? "Bạn là Xử Nữ" : "Bạn là Thiên Bình");

    break;
  case 10:
    alert(day <= 23 ? "Bạn là Thiên Bình" : "Bạn là Hổ Cáp");
    break;
  case 11:
    alert(day <= 21 ? "Bạn là Hổ Cáp" : "Bạn là Nhân Mã");
    break;
  case 12:
    alert(day <= 21 ? "Bạn là Nhân Mã" : "Bạn là Ma Kết");
    break;
  default:
    break;
}
