function apiGetProducts() {
  return axios({
    url: "https://62f50939ac59075124c9d3c4.mockapi.io/products",
    method: "GET",
  });
}

function apiAddProduct(product) {
  return axios({
    url: "https://62f50939ac59075124c9d3c4.mockapi.io/products",
    method: "POST",
    // ở method POST (tạo mới) , cần thêm 1 key data chứa dữ liệu truyền lên server để tạo mới
    data: product,
  });
}
