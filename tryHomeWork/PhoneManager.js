// PhoneManager quản lí danh sách điện thoại và các phương thức thêm/xoá/cập nhật,.. điện thoại
class PhoneManager {
    constructor() {
        // danh sách điện thoại
        this.Phones = [];
    }

    // phương thức thêm
    addPhone(Phone) {
        //c1
        // this.Phones.push(Phone);
        //c2 : tạo ra một array mới và gáng ngược lại cho thằng array Phones
        this.Phones = [...this.Phones , Phone] 
    }

    //phương thức xoá
    delete(PhoneId) {
        // c1
        // // tìm trong mảng array có giá trị bằng với giá trị muốn xoá
        // const index = this.Phones.findIndex((Phone) => Phone.id === PhoneId);
        // // nếu mà tìm được cùng id
        // if(index !== -1) {
        //     // splice = xoá
        //     this.Phones.splice(index, 1) // từ vị trí index xoá 1 phần tử
        // }

        // c2
        this.Phones.filter((Phone) => Phone.id !== PhoneId);
    }

    // cập nhật
    update(Phone) {
        //tham số Phone : object Phone sẽ chứa giá trị cập nhật
        // thay đổi 1 object bên trong cái array
        // đi tìm giá trị index
        
        // c1
        // const index = this.Phone.findIndex((item) => item.id === Phone.id);
        // // nếu bằng với giá trị đó thì gáng ngược lại giá trị mới cho Phones
        // if(index !== -1) {
        //     this.Phones[index] = Phone;
        // }

        // c2 : dùng hàm map
        this.Phones = this.Phones.map((item) => {
            if (item.id === Phone.id) {
                return Phone;
            }
            return item;
        });
    }

    // tìm kiếm
    findById(phoneId) {
        return this.Phones.find(phone => phone.id === phoneId)
    }

    filterByType(type) {
        return this.Phones.filter((phone) => phone.type === type);
    }
}
