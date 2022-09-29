// try - catch: kĩ thuật xử lý lỗi
try {
  console.log("1");

  // Khi gặp một câu lệnh bị lỗi trong block try, nó sẽ bỏ qua các câu lệnh tiếp theo, và ngay lập tức nhảy xuống block catch
  console.log(a); // code lỗi

  // Code bị bỏ qua
  console.log("2");
} catch (error) {
  console.log("Error: ", error);
  console.log("Error message: ", error.message);
}

// throw Error
try {
  let user = localStorage.getItem("user");
  // Kiểm tra nếu không có dữ liệu trong localStorage sẽ ném ra 1 lỗi
  if (!user) {
    // Bất cứ khi nào gặp lệnh throw trong block try, ngay lập tức sẽ nhảy xuống block catch
    throw new Error("User is not exist");
  }

  console.log("User:", user);
} catch (error) {
  // Xử lý lỗi
  console.log("Error:", error.message);
}

console.log("Hello BC32");



