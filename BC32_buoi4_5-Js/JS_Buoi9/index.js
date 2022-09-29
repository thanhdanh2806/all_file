// Kiểu dữ liệu: object

// primitive value: string, number, boolean, null, undefined
// reference value: function, array, object

// Khởi tạo object chứa thông tin của một người dùng
let user = {
  // key: value
  name: "Bob",
  age: 26,
  address: "123 CMT8",
  // key mà có khoảng cách thì cần được đưa vào bên trong dấu nháy chuỗi
  "likes games": "lol, dota, fifa",
};

console.log("object user:", user);

// Truy cập vào một thuộc tính (property) của object user
console.log("name:", user.name); // Bob
console.log("age:", user["age"]); // 26
console.log("email:", user.email); // undefined
console.log("likes games:", user["likes games"]); // "lol, dota, fifa"

let key = "address";
// user[key] => user["address"] => user.address
console.log("truy cập vào thuộc tính thông qua một biến", user[key]);

// Thay đổi giá trị một thuộc tính của object
user.name = "John";
console.log("user sau khi gán giá trị cho thuộc tính name:", user);

// Thêm một thuộc tính mới vào object
user.email = "john@gmail.com";
console.log("user sau khi gán giá trị cho thuộc tính email:", user);

// Xoá một thuộc tính trong object
delete user.email;
console.log("user sau khi xoá thuộc tính email:", user);

// Kiểm tra xem một thuộc tính có tồn tại trong object hay không
console.log("kiểm tra email có tồn tại trong object user:", "email" in user);
console.log("kiểm tra name có tồn tại trong object user:", "name" in user);

// ======================================================================

let animal = {
  name: "lulu",
  type: "corgi",
};

// let animal1 = animal; // tạo biến animal1 tham chiếu tới cùng vùng nhớ của animal
let animal1 = { ...animal }; // tạo object animal1 và sao chép lại các thuộc tính của object animal
animal1.type = "pug";

let animal2 = { ...animal, type: "golden" };
// { name: "lulu", type: "corgi", type: "golden" } => { name: "lulu", type: "golden" }

console.log(animal, animal1, animal2);

// ======================================================================

let student = {
  // thuộc tính (properties)
  name: "Alice",
  age: 20,
  email: "alice@gmail.com",

  // phương thức (method)
  sayHi: function () {
    console.log("Hello!!!");
  },
  // Cú pháp rút gọn để viết một phương thức
  print() {
    // this bên trong một function đại diện cho đối tượng (object) gọi tới function này
    // console.log(this);
    console.log("Name:", this.name, "Email:", this.email);
  },

  // Arrow function không định nghĩa this, nó sẽ lấy this của function cha của nó (trường hợp không có function cha, sẽ lấy ở ngoài cùng là object window)
  // => Không sử dụng arrow function làm method cho object
  // print: () => {
  //   console.log(this); // window
  //   console.log("Name:", this.name, "Email:", this.email);
  // },
};

// Gọi tới phương thức sayHi của object student
student.sayHi();
// Gọi tới phương thức print của object student
student.print();

function foo() {
  console.log(this); // thuộc đối tượng window, là một đối tượng đặc biệt của trình duyệt, cung cấp một vài thông số đặc biệt để làm việc trực tiếp với trình duyệt (VD: alert, promt, console,...)
}
foo(); // window.foo()

// ======================================================================

// Dùng function constructor để tạo các object có chức năng tương tự nhau
// function constructor giống như một regular function với điều kiện phải viết hoa chữ cái đầu tiên

function Student(name, age, email) {
  // JS sẽ tự động tạo ra một object this
  // let this = {}

  this.name = name;
  this.age = age;
  this.email = email;

  this.sayHi = function () {
    console.log("Hello!!!!!");
  };

  // JS sẽ tự động return về object this
  // return this
}

Student.prototype.print = function () {
  console.log("Name:", this.name, "Email:", this.email);
};

// function constructor (lớp đối tượng) phải được thực thi kèm với từ khoá new
let studentA = new Student("Alice", 20, "alice@gmail.com");
let studentB = new Student("Jack", 23, "jack@gmail.com");

console.log("studentA:", studentA);
studentA.print();
console.log("studentB:", studentB);
studentB.print();

// string template
let username = "Dan Nguyen";
let email = "dan@gmail.com";

let html1 = "<p>" + username + " - " + email + "</p>";
console.log("html1", html1);

let html2 = `<p>${username} - ${email}</p>`;
console.log("html2", html2);

let html3 = `
  <ul>
    <li>${username}</li>
    <li>${email}</li>
  </ul>
`;
console.log("html3", html3);
