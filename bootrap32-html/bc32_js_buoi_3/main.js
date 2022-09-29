//global
// var usename = "Nguyen";

function tong() {
  //Đầu vào
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  //Xử lý
  //convert string => number
  //   number1 = parseInt(number1);
  //   number2 = parseInt(number2);

  var total = number1 + number2;
  //   var result = "Tổng 2 số: " + total;
  var result = "<p>Tổng 2 số: " + total + "</p>";

  //Đầu ra
  document.getElementById("showInfoTotal").innerHTML = result;
  //style div#showInfoTotal inline
  //   document.getElementById("showInfoTotal").style.textAlign = "center";
  //   document.getElementById("showInfoTotal").style.backgroundColor = "green";
  //   document.getElementById("showInfoTotal").style.color = "white";

  //style div#showInfoTotal class
  //   document.getElementById("showInfoTotal").className =
  //     "card-footer bg-success text-center text-white";

  //style div#showInfoTotal class
  document.getElementById("showInfoTotal").classList.add("bg-success");
  document.getElementById("showInfoTotal").classList.add("text-center");
  document.getElementById("showInfoTotal").classList.add("text-white");
}

document.getElementById("btnTaoThe").onclick = function () {
  //Tạo thẻ bằng chuỗi
  //   var tagP = "<p>Hello Cybersoft</p>";
  //   document.getElementById("divContent").innerHTML = tagP;

  //DOM
  var tagP = document.createElement("p");
  tagP.innerHTML = "Hello Cybersoft";
  document.getElementById("divContent").appendChild(tagP);
};

/**
 * Tinh Tien Tip
 */
document.getElementById("btnTinhNao").onclick = function () {
  //Dau vao local
  var tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var share = document.getElementById("share").value;

  //Xu ly: 100 * 30/100 / 3
  var total = (tongTienThanhToan * phanTramTip) / 100 / share;
  //format vnd
  var currentFormat = new Intl.NumberFormat("vn-VN");

  var result = "";
  result += "<div class='bg-success text-center text-white'>";
  result += "<p>Tip Amount</p>";
  result += "<p>" + currentFormat.format(total) + " vnd</p>";
  result += "<p>Mỗi người</p>";
  result += "</div>";

  //Dau ra
  document.getElementById("showInfoTip").innerHTML = result;
};

/**
 * Movie
 */
document.getElementById("btnSubmit").onclick = function () {
  var tenPhim = document.getElementById("tenPhim").value;
  var giaVeNL = document.getElementById("giaVeNL").value * 1;
  var slVeNL = document.getElementById("slVeNL").value * 1;
  var giaVeTE = document.getElementById("giaVeTE").value * 1;
  var slVeTE = document.getElementById("slVeTE").value * 1;
  var phanTramTT = document.getElementById("phanTramTT").value * 1;

  var tongSlVe = slVeNL + slVeTE;
  var doanhThu = giaVeNL * slVeNL + giaVeTE * slVeTE;
  var tienTuThien = (doanhThu * phanTramTT) / 100;
  var loiNhuan = doanhThu - tienTuThien;

  var currentFormat = new Intl.NumberFormat("vn-VN");

  var result = "<div class='bg-success text-center text-white'>";
  result += "<p>Tên phim:.......... " + tenPhim + "</p>";
  result += "<p>Số vé đã bán:.......... " + currentFormat.format(tongSlVe) + "</p>";
  result += "<p>Doanh thu:.......... " + currentFormat.format(doanhThu) + " vnd</p>";
  result += "<p>Trích % từ thiện:.......... " + phanTramTT + "%</p>";
  result += "<p>Tổng tiền từ thiện:.......... " + currentFormat.format(tienTuThien) + " vnd</p>"; 
  result += "<p>Lợi nhuận:.......... " + currentFormat.format(loiNhuan) + " vnd</p>";
  result += "</div>"; 
  
  document.getElementById("showInfoMovie").innerHTML = result;
};
