getProducts();

// function getProducts request API để lấy danh sách sản phẩm
function getProducts() {
  apiGetProducts()
    .then((response) => {
      // response.data là dữ liệu trả về từ API
      console.log("API products:", response.data);
      // Duyệt qua danh sách sản phẩm và tạo các đối tượng Product
      let products = response.data.map((product) => {
        return new Product(
          product.id,
          product.name,
          product.image,
          product.price,
          product.type
        );
      });
      // Hiển thị danh sách sản phẩm ra giao diện
      display(products);
    })
    .catch((error) => {
      console.log(error);
    });
}

// addProduct request API để thêm sản phẩm
function addProduct(product) {
  // dùng object product để request API để thêm sản phẩm
  apiAddProduct(product)
  .then(() => {
    // dữ liệu được thêm chỉ mói tồn tại ở phía server
    // cần gọi lại API get products để lấy được dữ liệu mới vùa thêm
    getProducts();
  })
  .catch((error) => {
    console.log(error);
  });
}

// ==========================================================================================

function display(products) {
  let output = products.reduce((result, product, index) => {
    return (
      result +
      `
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
    );
  }, "");

  dom("#tblDanhSachSP").innerHTML = output;
}

function dom(selector) {
  return document.querySelector(selector);
}

// ======================================= DOM ===================================================
//lắng nghe sự kiện click cảu button thêm mới v2 gọi tới callback function
dom("#btnThemSP").addEventListener("click", () => {
  // hàm sẽ được gọi khi user click vào button thêm mới

  // 1. thay đổi heading và hiển thị footer
  dom(".modal-title").innerHTML = "Thêm sản phẩm";
  dom(".modal-footer").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Hủy</button>
  <button class="btn btn-primary" data-type="add">Thêm</button>
  `;
});

// sự kiện (event) có 1 tính chất gọi là event bubbling - khi 1 ự kiện được phát sinh ra nào đó nó sẻ nổi bọt sự kiện đó lên trên các thẻ tổ tiên của nó
// lắng nghe sự kiện click vào button thêm ở modal-foter (event delegation)
// khi 1 sự kiện  click được phát sinh hàm addEventListener sẽ gọi tới gọi tới callback function à truyền vào tham số là đối tượng event - ta dùng evttarget đề lấy ra thẻ gốc phát sinh ra sự kiện đó 
dom(".modal-footer").addEventListener("click", (evt) => {
  console.log(evt);
  let elementType = evt.target.getAttribute("data-type");

  // DOM các inpus để lấy data
  let name = dom("#TenSP").value;
  let price = dom("#GiaSP").value;
  let image = dom("#HinhSP").value;
  let type = dom("#loaiSP").value;
  //tạo object từ lớp đối tượng Product
  let product = new Product(null,name,image,price,type);

  if(elementType === "add") {
    addProduct();
  }
});