// 1. while

// b1 : khởi tạo biến bước nhảy
let count = 1
// b3 đưa biểu thức điều kiện vào while
while (count <= 5) {
    console.log("xinchao" + count);
    count++;
}

// bài tập 1 
function baitap1() {
    // b1 DOM
    let count = 0;
    let divResult = document.getElementById("result1");
    let number = +document.getElementById("num1").value;
    // b2 xử lú
    
    // kiểm tra nếu giá trị number không hợp lệ => return để kết thúc hàm
    
    if(number <= 1) {
        alert('giá trị không hợp lệ')
        return;
    }
    
    
    while ( number > 1){
        number = Math.floor(number / 2) ;
        count++;
        divResult.innerHTML += "Count" + count + " - num " + number + "<br />";
    }
    //b3  xất
    divResult.style.display = "block";
}

// 2. do while

let count2 = 1 ;

do {
    console.log("do...while run lần" , count2);
    count2++;
} while(count2 < 1)

// ==============================================

// bai tap 2

function baitap2() {
    // b1 DOM

    let number = document.getElementById("num2").value;
    let total = 0 ;
    let i = 1;

    do {
        total += i ;
        i++;
    } while (i <= number)
    // b3
    let divResult = document.getElementById("result2");
    divResult.style.display = "block" ;
    divResult.innerHTML = "total" + total;
}

// ========================================================

// bài tập 3 FOR

for(let i = 0; i <=5; i++){
    console.log("xin chào, BC32 lần " + i);
}

// in các số nguyên dương nhỏ hơn = 100

function baitap3() {
    let sochan = "";
    let sole = "";

    // for( let i = 1; i <=100; i++) {
    //     if( i % 2 === 0 ){
    //         sochan += i + " " ;
    //     }
    //     if( i % 3 === 0 ){
    //         sole += i + " " ;
    //     }    
    // }

    let j = 1 ;

    while(j <= 100) {
        if ( j % 2 === 0) {
            sochan += j + " ";
        } else {
            sole += j + " ";
        }
        j++;
    }

    console.log("số chẵn : " + sochan);
    console.log("số lẻ : " + sole);
}
baitap3();

// =================================================

// bài tập 4

baitap4();

function baitap4() {
    let output = "";
    
    for(let i = 3; i < 1000; i += 3) {
        output += i + " " ;
    }
    console.log("chia hết cho 3 từ 0 đến 1000 : " + output);
}
// ===================================================

// 5 . vòng lặp lồng nhau 

for (let i = 1; i <=  3; i++) {
    for (let j = 1; j <= 3; j++){
        console.log("i:", i, "j:", j);
    }
}

// in ra hình vuông các kí tự ngôi sao 

baitap5();

function baitap5(){
    let output = "";
    //row
    for (let i = 1 ; i <=5 ; i++) {
        // Column 
        for (let j = 1 ; j <= 5 ; j++){
            output += "* "
        }
        output += "\n"; // "\n" kí tự xuống hàng
    }
    console.log(output);
}

// =============================================

baitap6();

function baitap6(){
    let output = "";
    for(let i = 1 ; i <= 5 ; i++){
        for (let j = 1 ; j <= 5 ; j++) {
            if( i === 1 || i === 5 || j === 1 || j === 5){
                output += "* ";
            } else {
                output += "  ";
            }
        }
        output += "\n"
    }
    console.log(output);
}

let num1 = 1;
while(true) {
    console.log("Num ", num1);
    num1++;
    if (num1 > 5) {
        break; // lập tức thoát vòng lặp
    }
}

// ==========================================================

// bài tập 7 

baitap7();

function baitap7() {
    let total = 0;
    while (true) {
        let value = +prompt("input your number");

    //kiểm tra nếu value bằng 0 => thoát khỏi vòng lặp

        if (!value) {
            break ;
        }
        total += value;
    }

    console.log("total: ", total);
}

//continue : bỏ qua lần lặp hiện tại và đi tới tăng giảm bước nhảy

