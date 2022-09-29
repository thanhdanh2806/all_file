// Cú pháp khởi tạo một hàm (function)

// function declaration
function greeting() {
  // Nội dung của hàm mặc định sẽ không được thực thi cho tới khi ta có thao tác gọi hàm
  console.log("Hello BC32");
}

// Gọi hàm
greeting();
// greeting()
// greeting()

// function expression
var showMessage = function () {
  console.log("Hello Javascript");
};

// Gọi hàm
showMessage();

// Hàm có kết quả trả về (return)
function getUsername() {
  // return về một giá trị (string, number, boolean,...)
  var username = "Alice";
  return username;
}
// Đối với hàm có kết quả trả về (return) khi gọi hàm ta sẽ tạo ra một biến để hứng kết quả trả về của hàm
var username = getUsername(); // var username = "Alice"
console.log(username);

// Hàm có tham số
function sum(a, b) {
  return a + b;
}
var sum1 = sum(5, 8);
console.log("sum1:", sum1);
var sum2 = sum(4, 13);
console.log("sum2:", sum2);
var x = 8;
var y = 10;
var sum3 = sum(x, y); // => sum(8, 10)
console.log("sum3:", sum3);

// Viết 1 hàm xếp loại học sinh, tham số nhận vào là điểm, và kết quả đầu ra là xếp loại
// >= 8: Giỏi, >= 6.5: Khá, >= 5: Trung Bình Khá, >= 3: Trung Bình, Yếu
function xepLoai(DTB) {
  // Cách 1: if-elseif-else
  // var ketQua = "";
  // if (DTB >= 8) {
  //   ketQua = "Giỏi";
  // } else if (DTB >= 6.5) {
  //   ketQua = "Khá";
  // } else if (DTB >= 5) {
  //   ketQua = "Trung Bình Khá";
  // } else if (DTB >= 3) {
  //   ketQua = "Trung Bình";
  // } else {
  //   ketQua = "Yếu";
  // }
  // return ketQua;

  // Cách 2: return
  if (DTB >= 8) {
    return "Giỏi";
  }
  if (DTB >= 6.5) {
    return "Khá";
  }
  if (DTB >= 5) {
    return "Trung Bình Khá";
  }
  if (DTB >= 3) {
    return "Trung Bình";
  }
  return "Yếu";
}

var xepLoaiHocSinhA = xepLoai(7.5);
console.log("xepLoaiHocSinhA:", xepLoaiHocSinhA);

// ============================================

// global variable ( biến toàn cục )
let a = 5 ;
let message = "Hello BC32";

function foo() {
  console.log("biến toàn cục : ", a ,message);
}

foo();

//funtion bar()
function bar() {
let a = 10;
let b = 8;
console.log("local varible",a ,b );
}

bar();

// biến b dược khai báo bên trong funtion nên khong thể truy cập
//console.log('giá tri b ' , b);

// ==> tránh biến toàn cục
// các đoạn code tránh viết bên trong function