class Food {
    constructor(id, name, type, price, discount, status, image, description) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.price = price;
      this.discount = discount;
      this.status = status;
      this.image = image;
      this.description = description;
    }
  
    // phương thức
    calcDiscountPrice() {
      return (this.price * (100 - this.discount)) / 100;
    }
  }
  