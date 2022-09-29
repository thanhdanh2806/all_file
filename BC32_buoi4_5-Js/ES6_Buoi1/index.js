// ================== 1. Khai báo biến ==================

// ES6 cung cấp 2 từ khoá khai báo biến mới là: let và const

// - var cho phép khai báo lại một biến đã được khai báo
var a = 1;
setTimeout(() => {
  console.log(a); // Hello
}, 1000);
var a = "Hello";

// - let và const không cho phép khai báo lại một biến đã được khai báo
let b = 1;
// let b = "Hello" // Uncaught SyntaxError: Identifier 'b' has already been declared
// let chỉ được gán lại giá trị mới
b = 10;

const c = 1;
// const (hằng số): không được gán giá trị mới sau khi khởi tạo
// c = 5 // Uncaught TypeError: Assignment to constant variable.

// Scope - Tầm vực hoạt động của biến
// - global scope: các biến khai báo ở ngoài cùng của 1 file, trường hợp này var, let, const như nhau
var d = 100;
console.log(window.d); // Khai báo biến bằng var ở global, biến được đưa vào object window
let e = 50;
console.log(window.e); // Khai báo biến bằng let/const ở global, biến không được đưa vào object window

// - function scope: các biến được khai báo ở bên trong 1 function
// var là function scope
function demoVarScope() {
  var a = 1;

  if (true) {
    var a = 2;
    console.log("var scope:", a); // 2
  }

  console.log("var scope:", a); // 2
}
demoVarScope();

// - block scope: các biến được khai báo bên trong cặp {} của if, for,...
// let và const là block scope
function demoLetScope() {
  let a = 1;

  if (true) {
    let a = 2;
    console.log("let scope (1):", a); // 2
  }

  console.log("let scope (2):", a); // 1
}
demoLetScope();

// Cơ chế hoisting: Quá trình thực thi các đoạn mã javascript được chia thành 2 giai đoạn
// - Giai đoạn 1 (hoisting): nâng các khai báo biến và hàm lên trên đầu scope (tầm vực hoạt động của biến đó)
// - Giai đoạn 2: thực thi code JS lần lượt từ trên xuống dưới

// var: giá trị khởi tạo khi hoisting là undefined
console.log(city); // undefined
var city = "Hồ Chí Minh";

// let/const: không có giá trị khởi tạo khi hoisting => không thể truy cập tới biến trước khi được khởi tạo giá trị
// console.log(name) // Uncaught ReferenceError: Cannot access 'name' before initialization
let name = "Bob";
console.log(name);

// => Luôn dùng const cần tạo một hằng số, còn lại thì dùng let, và không dùng var

// ================== 2. Arrow function ==================
const sum = (a, b) => {
  return a + b;
};
// Khi biểu thức return có thể viết trên cùng 1 dòng, ta có thể bỏ qua cặp {} và từ khoá return
const mul = (a, b) => a * b;

// Thường được sử dụng khi truyền vào tham số là callback function
// map(function(value) {
//   return value * 2
// })
// map((value) => value * 2)

// từ khoá this
// - regular function: this đại diện cho đối tượng gọi tới function, VD: student.getInfo()
// - arrow function: không định nghĩa this, mà chỉ lấy this của scope cha của nó

const person = {
  fullName: "Bob",
  email: "bob@gmail.com",
  // Bắt buộc viết regular function
  getInfo() {
    // this ở đây đang là object person

    // delay 1s trước khi in ra thông tin
    setTimeout(() => {
      console.log(`Name: ${this.fullName} - Email: ${this.email}`);
    }, 1000);
  },
};
person.getInfo();

// phương thức: bind, call, apply (chỉ sử dụng được cho regular function)
function getInfo(a, b, c) {
  console.log(a, b, c);
  console.log(`Name: ${this.fullName} - Email: ${this.email}`);
}

const student = {
  fullName: "Alice",
  email: "alice@gmail.com",
};

// apply: gọi function và truyền vào một object sẽ đại diện cho từ khoá this bên trong function
getInfo.apply(student, [1, 2, 3]); // các tham số của hàm được truyền vào bên trong 1 array
// call tương tự apply,
getInfo.call(student, 1, 2, 3); // các tham số của hàm được truyền vào phân cách bới dấu phẩy
// bind: tương tự call nhưng không gọi hàm mà return về một hàm mới
const fn = getInfo.bind(student, 1, 2, 3);
fn();

// ================== 3. Default parameters ==================
const greeting = (name = "unknow") => {
  // Gán giá trị mặc định cho tham số name nếu ta gọi hàm greeting mà không truyền vào giá trị
  // if(!name) {
  //   name = "unknow"
  // }

  console.log(`Hello ${name}`);
};
greeting(); // Không truyền vào tham số => lấy giá trị default khi khởi tạo hàm
greeting("Yasuo");

const calcBill = (price, VAT = 10) => {
  return (price * (100 + VAT)) / 100;
};
console.log("calcBill default", calcBill(100000));
console.log("calcBill 8%", calcBill(100000, 8));

// ================== 4. Rest parameters ==================
const getTotal = (...numbers) => {
  // numbers là một array, chứa tất cả các tham số được truyền vào khi gọi hàm
  return numbers.reduce((total, value) => total + value, 0);
};

console.log("getTotal(1, 2)", getTotal(1, 2));
console.log("getTotal(1, 2, 3, 4)", getTotal(1, 2, 3, 4));
console.log("getTotal(10, 20, 30, 40, 50)", getTotal(10, 20, 30, 40, 50));

// ================== 5. Spread Operator ==================
// Thường dùng để tạo ra một array/object mới mà sao chép giá trị của array/object ban đầu
const arrA = [1, 2, 3, 4];
const arrB = [...arrA]; // Tạo một array mới và sao chép giá trị của arrA

const objA = { a: 1, b: 2 };
const objB = { ...objA }; // Tạo một object mới và sao chép giá trị của objA

// Truyền các giá trị của một array vào rest params
console.log("getTotal(...arrA)", getTotal(...arrA)); // => getTotal(1, 2, 3, 4)
console.log("getTotal(...arrA)", getTotal(...objA));
// ================== 6. Destructuring ==================
const employee = {
  id: "00001",
  fullName: "Dan Nguyen",
  email: "dan@gmail.com",
  age: 26,
  address: "CMT8",
};

// Truy cập các thuộc tính của object employee và gán cho các biến
// const id = employee.id;
// const fullName = employee.fullName;
// const email = employee.email;
// const employeeAge = employee.age
// const employeeAdress = employee.address

const { id, fullName, email } = employee;
const { age: employeeAge, address: employeeAdress } = employee;
console.log("employee:", id, fullName, email, employeeAge, employeeAdress);

// Tạo một object mới kế thừa từ object employee tuy nhiên loại bỏ thuộc tính id ra khỏi object mới
const { id: _, ...newEmployee } = employee;
console.log("newEmployee", newEmployee);

const date = ["23", "08", "2022"];
// const day = date[0];
// const month = date[1];
// const year = date[2];
const [day, month, year] = date;
console.log("date:", day, month, year);

let x = 1;
let y = 2;
// hoán đổi giá trị của 2 biến
// let temp = x
// x = y;
// y = temp
[x, y] = [y, x];
console.log("x", x, "y", y);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const [h, k, ...newNums] = nums;
console.log("newNums", newNums);

// ============================== 7. temlste string ===========================

// const message = " hello " + fullName +  " - " + email ;
const message = ` Hello ${fullName} - ${email}`
const temp = `
dear ...
...
thank you.
` ;

// ======================== 8. object literal =================================

const firstName = "danh"
const key = 'address';
const student1 = {
  // firsName : firstName // first : "danh"
  firstName, // cho phép khai báo tắt thuộc tính của object với biến cùng tên
  lastname: " nguyen",
  [key]: "CMT8"  // => ["address"] => address

  // cho phép khai báo tắt phương thức của object bằng cách bỏ qua từ khóa function
  // getInfo: function() {
  //   console.log(`${this.firstName} ${this.last}`)
  // }
  getInfo(){
    console.log(`${thisfirstName} ${this.lastname}`);
  },
}

// 8. for...in / for... of ================================

const colors = ["red", "green", "blue"];
// for in: duyệt mảng và trả ra chỉ mục (index)
for (let i in colors) {
  console.log(`for in - index: ${i} value: ${colors[i]}`);
}
// for of: duyệt mảng và trả ra giá trị
for (let value of colors) {
  console.log(`for of - value: ${value}`);
}

// Ngoài ra ta có thể dùng for in để duyệt một object
const myObj = { a: 1, b: 2, c: 3, d: 4 };
for (let key in myObj) {
  console.log(`for in object - key: ${key} value: ${myObj[]}`);
}

// 9 . luyện tập phương thức mảng

const products = [
  { id: 1, type: "phone", name: "Iphone 13 Pro Max", price: 28000000 },
  { id: 2, type: "phone", name: "Samsung Galaxy S22 Ultra", price: 24000000 },
  { id: 3, type: "phone", name: "Xiaomi Mi 12 Pro", price: 18000000 },
  { id: 4, type: "laptop", name: "Macbook Pro M1", price: 50000000 },
  { id: 5, type: "laptop", name: "MSI Gaming", price: 30000000 },
  { id: 6, type: "laptop", name: "Alienware Gaming", price: 56000000 },
];

// YC1: Từ mảng products tạo ra một mảng mới chỉ chứa tên sản phẩm
const productNames = products.map((product) => {
  return product.name;
});
console.log(productNames)

// YC2: Từ mảng products lọc ra những sản phẩm có giá lớn hơn 30.000.000
const products2 = products.filter((product) => {
  return product.price >= 30000000;
});
console.log("YC2", products2);

// YC3: Từ mảng products, tính tổng tiền của tất cả sản phẩm
const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log("YC3:", totalPrice);

// YC4: Từ mảng products trả về mảng mới và thay đổi giá của sản phẩm có id là 3 giảm 10%
const products4 = products.map((product) => {
  if (product.id === 3) {
    return { ...product, price: product.price * 0.9 };
    // { id: 3, type: "phone", name: "Xiaomi Mi 12 Pro", price: 18000000, price: 18000000 * 0.9 }
  }

  // Những thằng còn lại return y nguyên
  return product;
});
console.log("YC4:", products4);

// YC5: Từ mảng products trả về mảng mới và xoá sản phẩm có id là 5
const products5 = products.filter((product) => {
  return product.id !== 5;
});
console.log("YC5:", products5);

// YC6: Từ mảng products trả ra kết quả như sau:
// const result = {
//   ids: [1, 2, 3, 4, 5, 6],
//   items: {
//     1: { type: "phone", name: "Iphone 13 Pro Max", price: 28000000 },
//     2: { type: "phone", name: "Samsung Galaxy S22 Ultra", price: 24000000 },
//     3: { type: "phone", name: "Xiaomi Mi 12 Pro", price: 18000000 },
//     4: { type: "laptop", name: "Macbook Pro M1", price: 50000000 },
//     5: { type: "laptop", name: "MSI Gaming", price: 30000000 },
//     6: { type: "laptop", name: "Alienware Gaming", price: 56000000 },
//   },
// };

