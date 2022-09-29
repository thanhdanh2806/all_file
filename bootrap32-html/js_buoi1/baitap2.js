/**
 * n= 679 | 6+7+9
 * 
 * đầu vào
 * -tạo biến n gán giá trị 123
 * 
 * xử lý 
 * - tạo biến hangTram = Math.floor (n /100) 
 * - tạo biến hangChuc = Math.floor(n % 100 /10)
 * - tạo biến hangDV = n % 10
 * 
 * đàu ra console
 */

var n = 123 ;

var hangTram = Math.floor (n /100);
var hangChuc = Math.floor(n % 100 /10);
var hangDV = n % 10;

console.log(hangTram );
console.log( hangChuc );
console.log(hangDV );

var tong = hangTram+ hangChuc+hangDV;

console.log("tong: " + tong);