// callback funtion 
function foo(callback) {
    callback(); // tương đương đang gọi tới bar()
}

function bar() {
    console.log("hello");
}

foo(bar); //chú y khi truyền vào tham số không kèm cặp dấu ()

// ưng dụng callbacl funtion
function processInput(callback){
    let value = prompt("Input your name:");

    //console.log("hello" + value);
    callback(value);
}

function consoleCallback(value) {
    console.log("hello" + value);
}

// function alertCallback(value) {
//     alert("hello" + value);
// }

// processInput(consoleCallback);
// processInput(alertCallback);
// processInput(function (value)  {
//     alert ("hello" + value);
// });



let numbers = [1, 2, 3, 4, 5]

// tạo ra một mang mới các giá trị trong mảng mới sẽ x2 từ mảng number: [2, ,4 ,6 , 8, 10]

let numbersx2 = []
for(let i = 0 ; i < numbers.length; i ++) {
    let valuex2 = numbers[i] * 2 ;
    numbersx2.push(valuex2);
}

console.log(numbersx2);

// tạo ra một mang mới các giá trị trong mảng mới sẽ x2 từ mảng number: [3 ,6 ,9 , 12, 15]

let numbersx3 = []
for(let i = 0 ; i < numbers.length; i ++) {
    let valuex3 = numbers[i] * 3 ;
    numbersx3.push(valuex3);
}

console.log(numbersx3);

function map (arr , callback ) {
    let result = [];
    for(let i = 0 ; i < arr.length; i ++) {
        let value = callback(arr[i]);
        result.push(value);
    }
    return result
}

// [ 1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]
let numbers2 = map(numbers, function(value) {
    return value * 2
});

// arrow function
let hello = (name) => {
    console.log ('hello' = name)
}
hello('danh nguyen')

// let sum = (a, b) => {
//     return a + b
// }
// => a + b tương đương => { return a + b }
let sum = (a, b) => a + b;
let c = sum(5,6);
console.log("sum(5,6):", c);

// áp dụng và call back fution
// let numbers4 = map(number, (value)=> {
//     return value *4 ;
// });

let numbers5 = map(numbers, (value) => value * 5);