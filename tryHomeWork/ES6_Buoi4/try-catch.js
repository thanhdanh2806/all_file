// try - catch kĩ thuật xử lý lỗi

try {
    console.log("1")

    // khi gặp 1 câu lênh bị lỗi trong block try nó sẽ bỏ qua các câu lệnh tiêp theo , và ngay lập tức nhảy xuống block catch
    console.log(a); //code lỗi
} catch (error){
    console.log("Error: ", error);
    console.log("Error message : ", error.message);
}

//throw Error
try {
    let user = localStorage.getItem('user')
    //kiểm tra nếu không có dữ liệu trong localStarage sẽ ném ra 1 lỗi
    if(!user) {
        throw new Error("User is not exist");
    }

    console.log("User :" , user);
} catch(error) {
    // xử lí lỗi
    console.log("Error", error.message );
}

console.log("hello bc32");