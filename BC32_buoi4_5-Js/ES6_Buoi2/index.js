// Lớp đối tượng ES5
function Student(name, email, className) {
  // Thuộc tính
  this.name = name;
  this.email = email;
  this.className = className;
}
// Phương thức
Student.prototype.getInfo = function () {
  console.log(
    `Name: ${this.name} - Email: ${this.email} - Class: ${this.className}`
  );
};

const studentA = new Student("Bob", "bob@gmail.com", "BC32");
console.log("studentA:", studentA);

// Lớp đối tượng ES6
class Employee {
  // constructor: là một phương thức tự động được khởi chạy khi ta khởi tạo lớp đối tượng
  // dùng để khởi tạo thuộc tính cho đối tượng
  constructor(name, email, position) {
    this.name = name;
    this.email = email;
    this.position = position;
  }
}

const employeeA = new Employee(
  "Alice",
  "alice@gmail.com",
  "Frontend Developer"
);
console.log("employeeA", employeeA);
employeeA.getInfo();

// ================== Kế thừa ==================

// Định nghĩa lớp đối tượng Animal chứa các thuộc tính và phương thức chung
class Animal {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} run with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stop`);
  }
}

// Định nghĩa lớp đối tượng Lion kế thừa từ lớp đối tượng Animal
// Từ khoá kế thừa: extends
class Lion extends Animal {
  // Định nghĩa phương thức chỉ riêng lớp đối tượng Lion có
  roar() {
    console.log(`${this.name} Grrrrrrrrrrrrrru`);
  }
}
// Khởi tạo đối tượng từ lớp đối tượng
const lion = new Lion("Sư tử", 100, 500);
lion.run(100);
lion.stop();
lion.roar();


// Định nghĩa lớp đối tượng Rabbit kế thừa từ lớp đối tượng Animal
class Rabbit extends Animal {
    // Định nghĩa phương thức chỉ riêng lớp đối tượng Rabbit có
    hide() {
      console.log(`${this.name} hiding`);
    }
  }
  const rabbit = new Rabbit("Rabbit", 20, 5, 'Thỏ nâu');
  rabbit.run(80);
  rabbit.stop();
  // rabbit.hide(); // Khác

// ================== Đa hình ==================

const rabbitA = new Rabbit("A", 10, 10, "Thỏ A");
const rabbitB = new Rabbit("B", 10, 10, "Thỏ B");
const rabbitC = new Rabbit("C", 10, 10, "Thỏ C");
const lionA = new Lion("D", 100, 500);
const lionB = new Lion("E", 100, 500);
const lionC = new Lion("F", 100, 500);

const animals = [rabbitA, lionC, lionA, rabbitB, rabbitC, lionB];

for (let animal of animals) {
    // Tính đa hình thể hiện, ta không biết animal hiện tại là Lion hay Rabbit, ta chỉ cần biết bởi vì nó được kế thừa từ cùng 1 class cha là Animal, nên chắc chắn nó sẽ có phương thức run()
    const speed = Math.floor(Math.random()*100);
    animal.run(speed);
  }

