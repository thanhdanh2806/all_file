const employee = {
  id: "00001",
  fullName: "Dan Nguyen",
  email: "dan@gmail.com",
  age: 26,
  address: "CMT8",
};

// Truy cập các thuộc tính của object employee và gán cho các biến
// const id = employee.id;
// const fullName = employee.fullName;
// const email = employee.email;
// const employeeAge = employee.age
// const employeeAdress = employee.address

const { id, fullName, email } = employee;
const { age: employeeAge, address: employeeAdress } = employee;
console.log("employee:", id, fullName, email, employeeAge, employeeAdress);
