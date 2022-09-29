// FoodManager quản lý danh sách món ăn và các phương thức thêm/xoá/cập nhật,... món ăn
class FoodManager {
    constructor() {
      // danh sách món ăn
      this.foods = [];
    }
  
    // phương thức
    addFood(food) {
      // this.foods.push(food);
  
      this.foods = [...this.foods, food];
    }
  
    deleteFood(foodId) {
      // const index = this.foods.findIndex((food) => food.id === foodId);
      // if (index !== -1) {
      //   this.foods.splice(index, 1);
      // }
  
      this.foods = this.foods.filter((food) => food.id !== foodId);
    }
  
    updateFood(food) {
      // tham số food: object food chứa giá trị sẽ cập nhật
      // thay đổi 1 object bên trong 1 array
  
      // const index = this.foods.findIndex((item) => item.id === food.id);
      // if (index !== -1) {
      //   this.foods[index] = food
      // }
  
      this.foods = this.foods.map((item) => {
        if (item.id === food.id) {
          return food;
        }
        return item;
      });
    }
  
    findById(foodId) {
      return this.foods.find(food => food.id === foodId)
    }
  }
  
  // const foodManager = new FoodManager()
  // foodManager.foods
  
  
  
  
  
  
  
  