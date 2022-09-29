getProducts();

// function getProducts request API để lấy danh sách sản phẩm
function getProducts() {
  axios({
    url: "https://62f50939ac59075124c9d3c4.mockapi.io/products",
    method: "GET",
  })
    .then((response) => {
      // response.data là dữ liệu trả về từ API
      console.log('API products:', response.data);
      // Duyệt qua danh sách sản phẩm và tạo các đối tượng Product
      let products = response.data.map(product => {
        return new Product(product.id, product.name, product.image, product.price, product.type)
      })
      // Hiển thị danh sách sản phẩm ra giao diện
      display(products);
    })
    .catch((error) => {
      console.log(error);
    });
}

// ==========================================================================================

function display(products) {
  let output = products.reduce((result, product, index) => {
    return result + `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <img src="${product.image}" width="50px" height="50px" />
        </td>
        <td>${product.type}</td>
      </tr>
    `
  }, "")

  dom('#tblDanhSachSP').innerHTML = output
}

function dom(selector) {
  return document.querySelector(selector)
}