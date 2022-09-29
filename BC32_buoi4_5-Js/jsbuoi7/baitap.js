let numbers = []

function addNumbers() {
    //Dom
    let number = +document.getElementById("numbers").value ;
    // thêm số vào mảng
    numbers.push(number);
    console.log(numbers);

    // tính tổng các số chẳn

// cách 1 :
//     let total = 0 ;
//     for(let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             total += numbers[i];
//         }
//     }
//     console.log("tổng các số chẳn :" , total);
// }


// cách 2 : 
let total = numbers.reduce((total, value) => {
    return value % 2 === 0 ? total + value : total ;
}, 0);
console.log("tổng các số chẵn", total);



// số lượng số âm
let numberofNegative = numbers.reduce((count, value) => {
    return count < 0 ? count + 1 : count ;
}, 0);
console.log("số lượng số chẳn : ", numberofNegative);
}