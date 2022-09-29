// DOM 1 phần tử
function dom(selector) {
  return document.querySelector(selector)
}
// DOM tới nhiều phần từ
function domAll(selector) {
  return document.querySelectorAll(selector)
}

function showInfo() {
  // B1: DOM
  let id = dom("#txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let type = document.getElementById("loaiSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let literature = +document.getElementById("txtDiemVan").value;

  // B2: Tạo object student
  let student = {
    // Khi value là 1 biến mà trùng tên với key, ta có thể rút gọn như sau id: id => id
    id, // tương đương id: id,
    name,
    type,
    math,
    literature,
    calcScore() {
      return (this.math + this.literature) / 2;
    },
    getRank() {
      let score = this.calcScore();

      if (score >= 8) {
        return "Giỏi";
      }
      if (score >= 6.5) {
        return "Khá";
      }
      if (score >= 5) {
        return "Trung Bình";
      }
      if (score >= 3) {
        return "Yếu";
      }
      return "Kém";
    },
  };

  // B3: Xuất ra giao diện trở lại
  dom("#spanMaSV").innerHTML = student.id;
  dom("#spanTenSV").innerHTML = student.name;
  dom("#spanLoaiSV").innerHTML = student.type;
  dom("#spanDTB").innerHTML = student.calcScore();
  dom("#spanXepLoai").innerHTML = student.getRank();
}
