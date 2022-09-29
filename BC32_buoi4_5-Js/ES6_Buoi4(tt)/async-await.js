// async - await: kĩ thuật xử lý bất đồng bộ thay cho promise

// 1 promise sẽ có 3 trạng thái: pending, fulfilled, rejected.
function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // chờ tác vụ bất đồng bộ hoàn tất và trả ra data
      resolve(1);
    }, 1000);
  });
}

getDataPromise().then((data) => {
  console.log(data);
});

// Sử dụng async thay cho promise
// Đặt async trước function, tương đương việc bên trong hàm sẽ return về một Promise
async function getDataAsync() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  // promise.then((data) => console.log(data))
  // await: chờ cho đến khi promise được resolve và trả ra data
  const data = await promise;
  // lệnh return data sẽ không được chạy cho đến khi promise phía trên được resolve
  return data;
}

getDataAsync().then((data) => {
  console.log(data);
});

// call API getUser => thông tin của user
// call API getPosts của 1 user (yêu cầu có userId) => danh sách posts
// call API getComments của các bài posts (yêu cầu có postIds) => danh sách comments

function getUser() {
  // return axios.get(...)
  return Promise.resolve({ id: 1, name: "Bob" });
}

function getPosts(userId) {
  return Promise.resolve([
    { id: 1, title: "HTML" },
    { id: 2, title: "Javascript" },
  ]);
}

function getComments(postIds) {
  // postIds: [1, 2, 3]
  return Promise.resolve([
    { id: 1, content: "Siêu hay" },
    { id: 2, content: "Hết xảy" },
  ]);
}

function init() {
  // getUser().then((user) => {
  //   // call API getUser thành công
  //   getPosts(user.id).then((posts) => {
  //     // call API getPosts thành công
  //     const postIds = posts.map((item) => item.id);
  //     getComments(postIds).then((comments) => {
  //       console.log("Kết quả cuối cùng:", comments);
  //     });
  //   });
  // });

  // promise chain
  getUser()
    .then((user) => {
      // return về promise bên trong callback của then sẽ cho phép ta nhận kết quả của promise đó ở lần .then tiếp theo
      return getPosts(user.id);
    })
    .then((posts) => {
      const postIds = posts.map((item) => item.id);
      return getComments(postIds);
    })
    .then((comments) => {
      console.log("Kết quả cuối cùng:", comments);
    })
    .catch((error) => {
      console.log(error);
    });
}

init();

// const initAsync = async () => {}
async function initAsync() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const postIds = posts.map((item) => item.id); // [1, 2]
    const comments = await getComments(postIds);
    console.log("Kết quả cuối cùng khi dùng async-await:", comments);
  } catch (error) {
    // Để bắt lỗi reject của promise khi dùng async-await, ta dùng try-catch
    console.log(error);
  }
}
initAsync();
