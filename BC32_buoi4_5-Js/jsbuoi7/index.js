// kiểu dữ liệu mảng (array)

let colors = ["red" , "green" , "blue"];
let animals = ["dog" , "cat" , "chicken"];

// để truy cập vào một phần tử nào đó trong mảng , ta chỉ dùng mục (index)
// index    0      1       2
// ["red" , "green" , "blue"]

console.log("colors[1]", colors[1]);
console.log("animals[0]", colors[0]);
console.log("animals[10]", animals[10]);

//kiểm tra độ dài mảng 
console.log("colors length:", colors.length);
console.log("animals length:", animals.length);

//duyệt mảng
console.group("duyệt mảng");
for(let i = 0; i < animals.length; i++) {
    console.log('index', i, "value:" , animals[i]);
}
console.groupEnd();

// các phương thức làm việc với mảng
// - thêm 1 hoặc nhiều phần tử
console.group("push");
console.log("mảng colors ban đầu,", colors);
colors.push('black' , 'white')
console.log("mảng colors sau khi push:" , colors)
console.groupEnd();

// -pop : xóa một phần ở cuối
console.group("pop");
console.log("mảng colors ban đầu,", colors);
colors.pop()
console.log("mảng colors sau khi push:" , colors)
console.groupEnd();

// - unshift : thêm một hoạc nhiều mảng vào đầu mảng 
console.group("unshift");
console.log("mảng colors ban đầu:", animals);
animals.unshift("duck", "lion");
console.log("mảng colors sau khi push:" , animals);
console.groupEnd();

// - shift : xóa một phần tử ở đầu mảng
console.group("shift");
console.log("mảng colors ban đầu:", animals);
animals.shift("duck", "lion");
console.log("mảng colors sau khi push:" , animals);
console.groupEnd();


// splice : có thể thêm hoặc xóa bất kì vị trí nào trong mảng
console.group("splice");
console.log("mảng colors ban đầu:", animals);
animals.splice(1 , 2)
console.log("mảng colors sau khi push:" , animals);
console.groupEnd();


console.group("spliceplus");
console.log("mảng colors ban đầu:", animals);
animals.splice(1 , 0, "cat", "duck")
console.log("mảng colors sau khi push:" , animals);
console.groupEnd();

//nối 2 hoặc nhiều mảng
console.group("nums");
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];
let nums4 = nums1.concat(nums2, nums3)
console.log("nums4 sau khi nối mảng:" , nums4);
console.log("nums1" , nums1);
console.groupEnd();


// indexOf : tìm kiếm phần tử trong mảng , trả về index của phần tử đầu tiên tìm thấy
// ,nếu không tìm thấy trả ra -1
// lastIndexOf: tương tự indexOf nhưng tìm từ cuối mảng
console.group("indexOf");
console.log("mảng colors ban đầu:", animals);
let search = 'duck'
console.log("giá trị tìm kiếm:", search);
console.log("mảng animals:", animals);
let index = animals.indexOf(search)
console.log('index của phần tử cần tìm:' , index)
console.groupEnd();

// john , split
console.group("join&split");
let str = animals.join(" - ");
console.log("join:" , str);

// let arr = animals.split(" - ");
// console.log("split:", arr);
console.groupEnd();

// revert : đảo ngược mảng
console.group("reverse");
console.log("mảng colors ban đầu" , colors);
colors.reverse();
console.log("mảng clors sau khi reverse:" , colors);
console.groupEnd();

// ================================================================

//JS chia thành 2 loại dữ liệu
// - primitive value : string, number , boolean , null , undefined
// - reference value : funtion , array

let arr1 = [1, 2, 3, 4];
// sao chép arr1
// elt arr2 = arr1; // bản chất tọa ra một biến arr2 tham chiếu tới cùng vùng nhớ với array 1
// let arr2 = arr1.slice(1,4) // sao chép mảng bằng hàm slice

let arr2 = [...arr1]; // sao chép mag3 spread operator ( toán tử ba chấm)

arr2.push(5); // thay đổi giá trị của arr2

let arr3 = [0 , ... arr1 , 5, 6 , 7] // sao chép mảng và thêm phần tử cho mảng

console.log("arr1", arr1);
console.log("arr2", arr2);
console.log("arr2", arr3);

// map : tọa ra một mảng mới , có kích thước bằng vói mảng ban đầu giá trị bên ttrong thay đổi
const numbers = [1, 2, 3, 4];
let numbersX2 = numbers.map((value, index) => {
    return value * 2 ;
});

//            value           index             return ( những giá trị được đưa vào mảng mới)
// lần 1 :     1               0                 1 * 2
// làn 2 :     2               1                 2 * 2
// lần 3 :     3               2                 3 * 2
// lần 4 :     4               3                 4 * 2
console.log("Map - numbersX2:", numbersX2);

// forEach: duyệt từng phần tử trong mảng , gọi tới callback truyền vào 2 tham số là giá trị và chỉ mục của phần tử đó
numbers.forEach((value, index) => {
    //ta chỉ thực hiện một hành động nào đó chứ khong trả về
    console.log("index" , index , "value" , value );
});

// filter : tạo ra một mảng có kích thươc nhờ hơn hoặc bằng mảng ban đầu vào mảng mói phụ thuộc vào giá trị return bên trong callback funtion
// - true : phần tử được đưa vào mảng mới
// - false : phần tử không được đưa vào mảng mới
let evenNumbers = numbers.filter((value , index) => {
    return value % 2 === 0 ;
});

//            value           index             return ( những giá trị được đưa vào mảng mới)
// lần 1 :     1               0                 1 * 2 === 0 => false
// làn 2 :     2               1                 2 * 2 === 0 => true
// lần 3 :     3               2                 3 * 2 === 0 => false
// lần 4 :     4               3                 4 * 2 === 0 => true
console.log("Filter - evennumbers", evenNumbers);

// reduce : tọa ra một giá trị mới ( number , boolean , string , array) từ màng ban đầu
let total = numbers.reduce((total, value , index) => {
    return total + value ;
}, 0);
//              total          value           index             return
// lần 1 :        0              1               0                0 + 1 = 1
// làn 2 :        1              2               1                1 + 2 = 3
// lần 3 :        3              3               2                3 + 3 = 6
// lần 4 :        6              4               3                6 + 4 = 10
console.log("Reduce - total : " , total);

// sort : sắp xếp mảng
let people = ["Max" , "Will" , "Lucas" , "Eleven" , "Dustin"]
console.log('People before sort:' , people );
people.sort();
console.log('People after sort:' , people );

let randomNums = [9, 13 ,4 , 1, 7 , 18 , 22 ,15]
console.log('randomNums before sort:' , randomNums);
randomNums.sort((a,b) => b - a );
console.log('randomNums after sort:' , randomNums);
randomNums.sort((a,b) => a - b );
console.log('randomNums after sort:' , randomNums);