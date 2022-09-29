console.log("hello world!");
console.log("hi js__buoi1!");

// variable (biến)
// = phép gán
// tạo biến phải có khai báo var
// kiểu dữ liệu 
// - string
// - number
// -boolean (true/false)
// -undefined
// -null

"hello cybersoft"

var username = "cybersoft";
console.log("user: " + username);

var address = "112 cao thắng";
console.log("address: " + address);

var numberStudent = "30";
console.log("numberStudent: "  + numberStudent); 

var isLogin = true;

// tạo biến
var age;
// cập nhật giá trị mới cho biến đã tạo
age = 18;
console.log("age: " + age);

var fullname = null;
console.log(fullname);

/**
 * các loại toán tử
 * +: nối chuỗi
 * /:chia lay phan nguyen
 * %: chia lay phan du
 * ++: tăng 1 đơn vị
 * --: giảm 1 đơn vị
 * =: phép gán
 * +=: 
 * -=:
 * *=:
 * /=:
 */

var number1 =  10;
var number2 = 5;

var tong = number1 + number2;
console.log("tong: " + tong);

var hieu = number1 - number2;
console.log("hieu: " + hieu);

var tich = number1 * number2;
console.log("tich: " + tich);

var thuong = number1 / number2;
console.log("thuong: " + thuong);

var chialaydu = number1 % number2;
console.log("chialaydu: " + chialaydu);

var count = 0;
console.log(count);
// count = count + 1;
count++;
console.log(count);

var count = 0;
var newcount = count++;
console.log(newcount);

var number = 0;
number += 5;
console.log(number);  

/**
 * hằng số(const)
 * ES6
 */
const PI = 3.14; 