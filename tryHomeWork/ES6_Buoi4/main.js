// import biến a từ file helper.js và đặt tên là nums
// import hàm sum từ file helper.js
import { a as nums, sum } from "./helper.js";
import { getProduct } from "./productAPI.js";

// import file có export default, không cần cặp ngoặc nhọn và có thể đổi tên tuỳ ý
import Product from "./Product.js";

let a = 10;

console.log("Giá trị a từ helper.js:", nums);

console.log("sum(5, 8):", sum(5, 8));

console.log("getProduct:", getProduct());

const product = new Product(1, "Samsung S22");
console.log(product);
