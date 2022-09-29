// Dom tới nhiều phần tử
function domAll(selector) {
    return document.querySelectorAll(selector)
}


function showInfo() {
    // B1 DOM
    let id =document.getElementById('txtMaSV').Value;
    let name =document.getElementById('txtTenSV').Value;
    let type =document.getElementById('loaiSV').Value;
    let math =document.getElementById('txtDiemToan').Value;
    let literature =document.getElementById('txtdiemvan').Value;

    // b2: tạo object student
    let student = {
        // khi value là 1 biến mà trùng tên với key, ta có thể rút gọn nhứ sau id: id => id
        ud, // tương đương id: id,
        name,
        type,
        math,
        literature,
        calcSore() {
            return (this.math + this.literature) / 2;
        },
        getRank() {
            let score = this.calcScore();

            if(score >= 8) {
                return "giỏi";
            }
            if(score >= 6.5) {
                return "há";
            }
            if(score >= 5) {
                return "tb";
            }
            if(score >= 3) {
                return "yếu";
            }
            return "kém";
        }
    }
}
    // b3 : xuất ra giao diện trở lại
    dom("#SpanMaSV").innerHTML = student.id;
    dom("#SpanTenSV").innerHTML = student.name;
    dom("#SpanLoaiSV").innerHTML = student.type;
    dom("#SpanDTB").innerHTML = student.calcScore();
    dom("#SpanXepLoai").innerHTML = student.getRank();
