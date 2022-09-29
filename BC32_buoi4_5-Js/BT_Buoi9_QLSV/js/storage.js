// Demo localStorage

// getItem: Lấy dữ liệu từ localStorage thông qua key, nếu không có trả về null
let name = localStorage.getItem("name");
console.log(name);

// setItem: lưu dữ liệu vào localStorage, nhận vào 2 tham số là key và value
localStorage.setItem("message", "Hello BC32");

// Lưu trữ dữ liệu là một array/object
let user = {
  name: "Bob",
  email: "bob@gmail.com",
};
// Chuyển object user thành JSON trước khi lưu trữ xuống localStorage
let jsonUser = JSON.stringify(user);
// localStorage.setItem('user', user)
localStorage.setItem("user", jsonUser);

let userStorage = localStorage.getItem("user");
// Chuyển JSON trở lại thành object user khi lấy từ localStorage lên
let userObject = JSON.parse(userStorage);
console.log("userObject", userObject);

// Session Storage: Tương tự localStorage dùng để lưu trữ dữ liệu trong browser tuy nhiên dữ liệu sẽ bị mất khi ta tắt browser
sessionStorage.setItem("name", "Dan Nguyen");
sessionStorage.getItem("name");
