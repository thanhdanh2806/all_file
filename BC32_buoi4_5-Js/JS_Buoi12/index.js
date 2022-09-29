// Đồng bộ
// alert("Hello");
// console.log("BC32");

// Bất đồng bộ
console.log(1);

// chương trình vẫn tiếp tục được thực thi chứ không dừng lại ở đây để chờ thời gian bị delay
setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);

// => 1 3 2

// Stack (ngăn xếp): cấu trúc dữ liệu dạng LIFO (vào sau ra trước), cơ chế để chứa các tác vụ javascript sẽ được thực thi theo một thứ tự nhất định
// Web API: các tính năng do trình duyệt cung cấp (DOM, setTimeout,...), khi gặp các tác vụ của web API thì javascript sẽ không xử lý mà đưa qua cho web API chạy song song với các lệnh của javascript.
// Queue (hàng đợi): cấu trúc dữ liệu dạng FIFO (vào trước ra trước), cơ chế để chứa các tác vụ javascript sau khi đã được web API xử lý xong
// Event loop: vòng lặp dùng để kiểm tra nếu Stack rỗng và Queue có tác vụ javascript, thì nó sẽ đưa các tác vụ đó lên stack để thực thi

// =============================================================================================

// AJAX - Asynchronous JavaScript And XML
// API - Application Programming Interface

// Hàm getTodo thực hiện thao tác request API
function getTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  console.log("Hello!!!");
}
getTodo();

// fetch: là một builtin function của javascript dùng để request API
// promise: là kĩ thuật dùng để xử lý bất đồng bộ trong javascript, một promise gồm 3 trạng thái
// - pending: request đang được thực thi
// - fulfilled: request thực thi thành công và trả về dữ liệu
// - rejected: request thực thi thất bại và trả về lỗi

// Hàm promise demo cách một promise hoạt động
function promise() {
  // do you love me???
  return new Promise((resolve, reject) => {
    // Cô gái suy nghĩ 5s
    setTimeout(() => {
      // resolve("Yes, I am"); // Tỏ tình thành công
      reject("No, I don't"); // Tỏ tình thất bại
    }, 5000);
  });
}

promise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// request API sử dụng thư viện axios
function getUsers() {
  axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getUsers();
