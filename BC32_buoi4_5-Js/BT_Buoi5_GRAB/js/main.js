function pay() {
  // DOM để kiểm tra xem user đang chọn loại grab nào
  // Đối với input có type là radio, để kiểm tra xem nó có đang được chọn hay không, ta dùng thuộc tính checked, giá trị trả ra true/false
  var isGrabCar = document.getElementById("grabCar").checked;
  var isGrabSUV = document.getElementById("grabSUV").checked;
  var isGrabBlack = document.getElementById("grabBlack").checked;

  var type = "";
  if (isGrabCar) {
    type = "GrabCar";
  } else if (isGrabSUV) {
    type = "GrabSUV";
  } else if (isGrabBlack) {
    type = "GrabBlack";
  }

  var km = +document.getElementById("km").value;
  var time = +document.getElementById("time").value;

  // Kiểm tra nếu user chưa nhập đầy đủ thông tin mà đã nhấn tính tiền
  if (!type || !km || !time) {
    alert(
      "Vui lòng chọn loại xe, nhập vào số KM và thời gian chờ trước khi thanh toán"
    );
    return; // Kết thúc hàm
  }

  // Tính tiền
  var price = 0;
  switch (type) {
    case "GrabCar":
      // if (km <= 1) {
      //   price += 8000;
      // } else if (km <= 19) {
      //   price += 8000 + (km - 1) * 7500;
      // } else {
      //   price += 8000 + 18 * 7500 + (km - 19) * 7000;
      // }

      // if (time >= 3) {
      //   // Math.floor(2.5) => 2
      //   price += Math.floor(time / 3) * 2000;
      // }
      price = calcPrice(km, time, 8000, 7500, 7000, 2000)
      break;
    case "GrabSUV":
      price = calcPrice(km, time, 9000, 8500, 8000, 3000)
      break;
    case "GrabBlack":
      price = calcPrice(km, time, 10000, 9500, 9000, 3500)
      break;
    default:
      break;
  }

  // Xuất giá tiền ra giao diện
  display(price);
}

// price1: tiền km <= 1
// price2: tiền 1 < km <= 19
// price3: tiền km > 19
// price4: tiền chờ
function calcPrice(km, time, price1, price2, price3, price4) {
  var price = 0;
  // Tính tiền thời gian chờ
  if (time >= 3) {
    price += Math.floor(time / 3) * price4;
  }
  // Tính tiền số km đi được
  if (km <= 1) {
    price += price1;
  } else if (km <= 19) {
    price += price1 + (km - 1) * price2;
  } else {
    price += price1 + 18 * price2 + (km - 19) * price3;
  }

  return price;
}

function display(price) {
  document.getElementById('divThanhTien').style.display = 'block';
  document.getElementById('xuatTien').innerHTML = price
}
