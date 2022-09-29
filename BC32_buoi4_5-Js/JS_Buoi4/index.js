// Một kiểu dữ liệu trong javascript: boolean
// boolean: true/false

var isActive = false;
var isLoggedIn = true;

var a = 5;
var b = 8;
var c = 5;

// Các biểu thức so sánh sẽ trả về giá trị boolean
console.log("a > b", a > b); // 5 > 8 => false
console.log("a < b", a < b); // 5 < 8 => true

// so sánh lớn/bé hơn hoặc bằng
console.log("a >= b", a >= c); // 5 >= 5 => true
console.log("b <= c", b <= c); // 8 <= 5 => false

// so sánh bằng
var d = "5";
console.log("a == c", a == c); // 5 == 5 => true
// Khi so sánh bằng với toán tử "==" thì nó sẽ đưa 2 giá trị về cùng kiểu dữ liệu rồi mới so sánh
console.log("a == d", a == d); // 5 == "5" => true
// Khi so sánh bằng với toán tử "===" thì nó sẽ đi kiểm tra kiểu dữ liệu của 2 biến trước, nếu khác kiểu dữ liệu lập tức trả về false
console.log("a === d", a === d); // 5 === "5" => false

// => Luôn luôn sử dụng toán tử "===" để so sánh bằng

// so sánh khác
console.log("a != c", a != c); // 5 != 5 => false
console.log("a != d", a != d); // 5 != "5" => false
console.log("a !== d", a !== d); // 5 !== "5" => true

// So sánh chuỗi
var name1 = "Anna";
var name2 = "Annie";
console.log("'Anna' > 'Annie'", name1 > name2); //  "Anna" > "Annie"
console.log("'b' > 'B'", "b" > "B");
console.log("'12' > '8'", "12" > "8");

// Cấu trúc điều kiện
// var a = 5;
// var b = 8;
if (a > b) {
  console.log("Giá trị a lớn hơn giá trị b");
}

// Bài tập tính tiền phạt thẻ tín dụng
function tinhTienPhat() {
  // B1: DOM lấy các giá trị từ input
  var creditCardBalance = +document.getElementById("creditCardBalance").value;
  var payment = +document.getElementById("payment").value;
  // B2: tính số tiền còn nợ
  var balance = creditCardBalance - payment;
  // B3: xử lý tính tiền phạt
  var pentalty = 0;
  if (balance > 0) {
    pentalty = (balance * 1.5) / 100;
  }
  // B4: Xuất thông tin
  alert("Số tiền phạt: " + pentalty);
}

// If-else
var x = 4;
var y = 6;

if (x > y) {
  console.log("Giá trị của x lớn hơn giá trị của y");
} else {
  console.log("Giá trị của y lớn hơn giá trị của x");
}

// Bài tập tính tiền lương
function tinhTienLuong() {
  // B1: DOM để lấy giá trị từ các input
  var hours = +document.getElementById("hours").value;
  var pay = +document.getElementById("pay").value;
  // B2: Tính tiền lương (cần kiểm tra thời gian làm)
  var totalSalary = 0;
  if (hours <= 40) {
    totalSalary = hours * pay;
  } else {
    totalSalary = 40 * pay + (hours - 40) * pay * 1.5;
  }
  // B3: Xuất thông tin
  alert("Tổng tiền lương: " + totalSalary);
}

// If-ElseIf-Else
// var x = 4;
// var y = 6;

if (x > y) {
  console.log("x lớn hơn y");
} else if (x < y) {
  console.log("x nhỏ hơn y");
} else {
  console.log("x bằng y");
}

// Bài tập tính tiền sản phẩm
function tinhTienSanPham() {
  // B1: DOM lấy giá trị từ các input
  var quantity = +document.getElementById("quantity").value;
  var price = +document.getElementById("price").value;
  // B2: Tính tổng tiền sản phẩm (cần kiểm tra số lượng)
  var totalPrice = 0;
  if (quantity < 50) {
    totalPrice = price * quantity;
  } else if (quantity <= 100) {
    totalPrice = 49 * price + (quantity - 49) * price * 0.92;
  } else {
    totalPrice = 100 * price + (quantity - 100) * price * 0.88;
  }
  // B3: Xuất kết quả
  alert("Tổng tiền hàng: " + totalPrice);
}

// Toán tử bậc 3 (Ternary operator)
var age = 16;

// Cách dùng if-else
// var message = "";
// if (age >= 18) {
//   message = "Welcome";
// } else {
//   message = "You are not allowed";
// }

// Cách dùng toán tử bậc 3
var message = age >= 18 ? "Welcome" : "You are not allowed";
console.log(message);

// Toán tử logic: &&(AND), ||(OR), !(NOT)

// &&:
// - Nếu tất cả giá trị là true: true && true => true
// - Nếu có ít nhất 1 giá trị là false: true && false && true => false

// Chỉ cho vào rạp nếu lớn hơn 13 tuổi VÀ có vé xem phim
var age = 15;
var hasTicket = true;
if (age >= 13 && hasTicket === true) {
  console.log("Welcome to cinema");
}

// ||:
// - Nếu tất cả giá trị là false: false || false => false
// - Nếu có ít nhất 1 giá trị là true => false || true || false => true

// Thời gian mở cửa của cửa hàng là từ 8 đến 22
var hour = 23;
if (hour < 8 || hour > 22) {
  console.log("Store closed");
}

// !:
console.log("!true", !true);
console.log("!false", !false);

// falsy value: 0, "", false, undefined, null, NaN
// if(variable) {}: Nếu giá trị của variable thuộc 1 trong 6 giá trị falsy value thì sẽ trả ra false
// if(!variable) {}: Nếu giá trị của variable thuộc 1 trong 6 giá trị falsy value thì sẽ trả ra true

var msg = "";
// Kiểm tra nếu msg là chuỗi rỗng thì sẽ gán cho nó 1 giá trị mới
if (!msg) {
  msg = "Hello Cybersoft";
}
console.log("msg:", msg);

var score = 8;
// Kiểm tra score có khác 0 hay không: score !== 0
if (score) {
  console.log("score:", score);
}

// switch-case
var number = 4;
switch (number) {
  case 1: {
    console.log("Một");
    break; // Thoát khỏi switch khi gặp từ khoá break
  }
  case 2: {
    console.log("Hai");
    break;
  }
  case 3: {
    console.log("Ba");
    break;
  }
  default: {
    console.log("Number không hợp lệ");
    break;
  }
}

// Bài tập tinh số ngày trong tháng
function tinhSoNgayTrongThang() {
  // B1: DOM
  var month = +document.getElementById("month").value;
  // Cách 1: dùng if-elseif-else
  // if (month === 2) {
  //   alert("28 ngày");
  // } else if (
  //   month === 1 ||
  //   month === 3 ||
  //   month === 5 ||
  //   month === 7 ||
  //   month === 8 ||
  //   month === 10 ||
  //   month === 12
  // ) {
  //   alert("31 ngày");
  // } else if (month === 4 || month === 6 || month === 9 || month === 11) {
  //   alert("30 ngày");
  // } else {
  //   alert("Tháng không hợp lệ");
  // }

  // Cách 2: Dùng switch case
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      alert("31 ngày");
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      alert("30 ngày");
      break;
    }
    case 2: {
      alert("28 ngày");
      break;
    }
    default: {
      alert("Tháng không hợp lệ");
      break;
    }
  }
}
