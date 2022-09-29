var isActive = false;
var isLoggedIn = true;

var a = 5;
var b = 8;
var c = 5;

console.log('a > b', a > b);
console.log('a < b', a < b);

console.log('a >= c', a >= c);
console.log('b <= c', b <= c);

var d = "5";

console.log('a == c', a == c);
//khi so sánh bằng toán tử thì nó sẽ đưa về cùng kiểu dữ liệu
console.log('a == d', a == d);
//tra kểu dữ liệu
//luôn luôn sử dụng toán tử === để so sánh =
console.log('a === d', a === d);

//so sánh khác
console.log ('a != c' , a != c);
console.log ('a != d' , a != d);

console.log ('a !== d' , a !== d);

// so sánh chuỗi
var name1 = "anna";
var name2 = "annie";
var name3 = "bob";

console.log('anna > annie' , name1 > name2);
console.log('bob > annie' , name3 > name2);
console.log("'b' > 'B' " , "b" > "B");
console.log("'12' > '8' " , "12" > "8");

// cấu trúc điều kiện
if(a < b) {
    console.log('giá trị a < b');
}

function tinhtienphat() {
    var thanhtoan = +document.getElementById("thanhtoan").value;
    var duno = +document.getElementById("duno").value;

    var balance = thanhtoan - duno ;

    var pentaly = 0;
    if(balance > 0) {
        pentaly = (balance * 1.5) / 100;
    }

    alert('số tiền phạt' + pentaly)
}


//if else
var x = 10;
var y = 6;

if(x  > y ) {
    console.log('giá trị x > y');
} 
else{
    console.log('giá trị y > x')
};

function moneytime() {
    var week = +document.getElementById("week").value;
    var time = +document.getElementById("time").value;

    if(time <= 40) {
        totalSlary = time * week ;
    }else {
        totalSlary = 40 * week + (time - 40) * week * 1.5 ; 
    }
    alert("tổng tiền lương: " + totalSlary);
}

// if-else-if 
if(x>y) {
    console.log('x>y');
}else if(x<y){
    console.log('x<y');
}else{
    console.log('x=y');
}

function thanhtien(){
    var soluong = +document.getElementById("soluong").value;
    var dongia = +document.getElementById("dongia").value;

    if(soluong < 50) {
        total = dongia * soluong ;
    } 
    else if(soluong <= 100) {
        total = 49*dongia + (soluong-49)*dongia*0.92 ;
    } 
    else {
        total = 100*dongia+(soluong-100)*dongia*0.88;
    }
    alert("total : " + total);
}


// toán tử bậc 3

var age = 16;
// var message = "";
// if(age >= 18)
// {
//     message = 'welcome';
// }
// else {
//     message = 'you are not';
// }

var message = age >= 18 ? "welcome" : "you are not" ;
console.log(message);

//toán tử logic &&, || , !

//&&
var age = 15 ;
var ticket = false;

if(age >= 13 && ticket === true){
    console.log('welcome to cinema')
}else {
    console.log('go out')
}
// ||
 
var hour = 23;
if(hour < 8 || hour > 22) {
    console.log('store closed')
}

// ! :
console.log("!true",!true);
console.log("!false",!false);