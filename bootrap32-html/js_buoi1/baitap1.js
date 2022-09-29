/**
 * mo hinhh 3 khối
 * đầu vào 
 * - cạnh 1 canh1=3
 * - cạnh 2 cành2=4
 * -
 * xử lý : căn bậc 2 tong binh phuong 2 goc vuong
 * - tạo biến canhHuyen có giá  trị là 0
 * - canhHuyen = canh1*canh1 + canh2*canh2
 * căn bậc 2 cho cạnh huyền (Math.sqrt())
 * đầu ra
 * thông bào kết quả canhHuyen = ?
 */

var canh1 = 3;
var canh2 = 4;
var canhHuyen = 0;

var canhHuyen = canh1*canh1 + canh2*canh2;
canhHuyen = Math.sqrt(canhHuyen);

console.log("canhHuyen : " + canhHuyen);