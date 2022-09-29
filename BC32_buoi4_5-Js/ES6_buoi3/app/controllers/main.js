// Khởi tạo đối tượng foodManager từ lớp đối tượng FoodManager
const foodManager = new FoodManager();

// Viết hàm hiển thị danh sách món ăn ra giao diện
function display(foods) {
  const html = foods.reduce((result, food) => {
    return (
      result +
      `
      <tr>
        <td>${food.id}</td>
        <td>${food.name}</td>
        <td>${food.type}</td>
        <td>${food.price}</td>
        <td>${food.discount}</td>
        <td>${food.calcDiscountPrice()}</td>
        <td>${food.status}</td>
        <td>
          <button
            class="btn btn-primary"
            onclick="updateFood('${food.id}')"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Cập nhật
          </button>
          <button class="btn btn-danger" onclick="deleteFood('${food.id}')">
            Xoá
          </button>
        </td>
      </tr>
    `
    );
  }, "");

  document.getElementById("tbodyFood").innerHTML = html;
}

// Lắng nghe sự kiện click vào button thêm món
dom("#btnThemMon").addEventListener("click", () => {
  const id = dom("#foodID").value;
  const name = dom("#tenMon").value;
  const type = dom("#loai").value;
  const price = +dom("#giaMon").value;
  const discount = +dom("#khuyenMai").value;
  const status = dom("#tinhTrang").value;
  const image = dom("#hinhMon").value;
  const description = dom("#moTa").value;

  // tạo object food từ class Food
  const food = new Food(
    id,
    name,
    type,
    price,
    discount,
    status,
    image,
    description
  );

  // Gọi tới phương thức addFood của object foodManager
  foodManager.addFood(food);

  // Gọi hàm display để hiển thị giao diện
  display(foodManager.foods);
});

// Lắng nghe sự kiện click vào button cập nhật món
dom("#btnCapNhat").addEventListener("click", () => {
  const id = dom("#foodID").value;
  const name = dom("#tenMon").value;
  const type = dom("#loai").value;
  const price = +dom("#giaMon").value;
  const discount = +dom("#khuyenMai").value;
  const status = dom("#tinhTrang").value;
  const image = dom("#hinhMon").value;
  const description = dom("#moTa").value;

  // tạo object food từ class Food
  const food = new Food( id, name, type, price, discount, status, image, description );

  // Gọi tới phương thức updateFood của object foodManager
  foodManager.updateFood(food);

  // Gọi tới hàm display để hiển thị giao diện
  display(foodManager.foods);
});

// Viết hàm hiển thị món ăn cần cập nhật lên trên các inputs
function updateFood(foodId) {
  const food = foodManager.findById(foodId);

  // Fill thông tin lên inputs
  dom("#foodID").value = food.id;
  dom("#tenMon").value = food.name;
  dom("#loai").value = food.type;
  dom("#giaMon").value = food.price;
  dom("#khuyenMai").value = food.discount;
  dom("#tinhTrang").value = food.status;
  dom("#hinhMon").value = food.image;
  dom("#moTa").value = food.description;

  // Disabled input id và button thêm
  dom("#foodID").disabled = true;
  dom("#btnThemMon").disabled = true;
}

// =========== helper function ===========
function dom(selector) {
  return document.querySelector(selector);
}
