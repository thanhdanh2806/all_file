// getElementsByTagName trả về HTMLCollection , nó gần giống một array, có length, index , tuy nhiên nó không có các hàm như một arry thoong6 thường
let pEls = document.getElementsByTagName("p");
console.log(pEls);
for(let i = 0 ; i < pEls.length; i++) {
    pEls[i].style.color = "red";
}

//ép kiều HTMLCollection về array  bằng toán tử ...
[...pEls].forEach((element) => {
    element.style.fontSize = "30px";
});

let contentEl = document.getElementsByClassName("content");
console.log(contentEl);
[...contentEl].forEach((element) => {
    element.style.fontWeight = "700";
});

// querySelector : có thể dùng DOM TỚI id , tag , class ... ( dùng như css select) , trả ra phần tử đầu tiên tìm thấy
let firstItem = document.querySelector(".Item");
console.log(firstItem);

// querySelectorALl: tương tự querySlector nhưng trả ra danh sách khớp với selector
let itemEls = document.querySelectorAll(".Item");
console.log(itemEls);
itemEls.forEach((element) => {
    element.style.listStyle = "none";
    element.style.color = "green"
});