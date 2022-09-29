var numArray = [] , arrayFloat = [];

function getEle(n) {
    return document.getElementById(n)
}

function getNumber() {
    var n = Number(getEle("inputNum").value);
    numArray.push(n), 
    getEle("txtArray").innerHTML = numArray
}

// function sumPositive() {
//     for (var n = 0, r = 0; r < numArray.length; r++)
//         numArray[r] > 0 && (n += numArray[r]);
//     getEle("txtSum").innerHTML = "Tổng số dương: " + n
// }
// 1 tổng số dương
function sumPositive() {
    for ( var n = 0 , r = 0 ; r < numArray.length; r++)
    numArray[r] > 0 && ( n += numArray[r]);
    getEle("txtSum").innerHTML = "tổng số dương: " + n
}

// function countPositive() {
//     for (var n = 0, r = 0; r < numArray.length; r++)
//         numArray[r] > 0 && n++;
//     getEle("txtCount").innerHTML = "Số dương: " + n
// }
// 2 đếm số dương
function countPositive() {
    for ( var n = 0 , r = 0 ; r < numArray.length ; r++)
    numArray[r] > 0 && n++;
    getEle("txtCount").innerHTML = " số dương : " + n 
}

// function findMin() {
//     for (var n = numArray[0], r = 1; r < numArray.length; r++)
//         numArray[r] < n && (n = numArray[r]);
//     getEle("txtMin").innerHTML = "Số nhỏ nhất: " + n
// }
// 3 tìm số nhỏ nhất
function findMin() {
    for ( var n = numArray[ 0], r = 1 ; r < numArray.length ; r++)
    numArray[r] < n && (n = numArray[r]);
    getEle("txtMin").innerHTML = "số nhỏ nhất : " + n
}

// function findMinPos() {
//     for (var n = [], r = 0; r < numArray.length; r++)
//         numArray[r] > 0 && n.push(numArray[r]);
//     if (n.length > 0) {
//         for (var e = n[0], r = 1; r < n.length; r++)
//             n[r] < e && (e = n[r]);
//         getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + e
//     } else
//         getEle("txtMinPos").innerHTML = "Không có số dương trong mảng"
// }
// 4 tìm số dương nhỏ nhất
function findMinPos() {
    for ( var n = [], r = 0 ; r < numArray.length; r++)
    numArray[r] > 0 && n.push(numArray[r]);
    if (n.length > 0) {
        for (var e = n[0], r = 1; r < n.length ; r++)
        n[r] < e && (e = n[r]);
        getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất : " + e 
    } else 
    getEle("txtMInPos").innerHTML = " không có số dương trong mảng"
}

// 5 tìm số chẵn cuối cùng trong mảng , nếu mảng không có số chẵn thì trả về -1 ;
// function findEven() {
//     for (var n = -1, r = 0; r < numArray.length; r++)
//         numArray[r] % 2 == 0 && (n = numArray[r]);
//     getEle("txtEven").innerHTML = "Số chẵn cuối cùng: " + n
// }
function findEven() {
    for (var n = -1, r = 0; r < numArray.length; r++) {
        if(numArray[r] % 2 == 0){
            n = numArray[r];
        }
    }
    getEle("txtEven").innerHTML = "Số chẵn cuối cùng: " + n
}

// 6 : đổi chỗ 2 giá trị trong mảng
function swap(n, r) {
    var e = numArray[n];
    numArray[n] = numArray[r],
    numArray[r] = e
}
function changePosition() {
    swap(getEle("inputIndex1").value, getEle("inputIndex2").value),
    getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray
}

// 7 sắp xếp mảng theo thứ tự tăng dần
function sortIncrease() {
    for (var n = 0; n < numArray.length; n++)
        for (var r = 0; r < numArray.length - 1 ; r++)
            numArray[r] > numArray[r + 1] && swap(r, r + 1);
    getEle("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray
}

// 8 tìm số nguyên tố đầu tiên trong mảng, không có thì in ra -1
function checkPrime(n) {
    if (n < 2)
        return !1;
    for (var r = 2; r <= Math.sqrt(n); r++)
        if (n % r == 0)
            return !1; 
    return !0
}
function findPrime() {
    for (var n = -1, r = 0; r < numArray.length; r++) {
        if (checkPrime(numArray[r])) {
            n = numArray[r];
            break 
        }
    }
    getEle("txtPrime").innerHTML = n
}

// 9 : nhập thêm số thực và tìm trong mag3 có bao nhiêu số nguyên
function getFloat() {
    var n = Number(getEle("inputFloat").value);
    arrayFloat.push(n),
    getEle("txtArrayFloat").innerHTML = arrayFloat
}
function findInt() {
    for (var n = 0, r = 0; r < arrayFloat.length; r++)
        Number.isInteger(arrayFloat[r]) && n++;
    getEle("txtInt").innerHTML = "Số nguyên: " + n
}


// 10 : so sánh số lượng số âm và số dương
function compareNum() {
    for (var n = 0, r = 0, e = 0; e < numArray.length; e++)
        numArray[e] > 0 
        ? n++ 
        : numArray[e] < 0 && r++;
    getEle("txtCompare").innerHTML = n > r ? "Số dương > Số âm" : n < r ? "Số âm > Số dương" : "Số âm = Số dương"
}


let tagname = document.getElementsByTagName("h2");
[...tagname].forEach((element) => {
    element.style.color = "red";
    element.style.fontWeight = "700";
    element.style.margin = "50px 10px 20px 30px";
});

// document.addEventListener("contextmenu", function(n) {
//     n.preventDefault()
// }, !1),

// document.onkeydown = function(n) {
//     return 123 != (n = n || window.event).keyCode && (!n.ctrlKey || !n.shiftKey || 73 != n.keyCode) && void 0
// }
//; 