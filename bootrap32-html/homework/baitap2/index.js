
function handleLogin() {
    var so1 = document.getElementById("sothu1").value;
    var so2 = document.getElementById("sothu2").value;
    var so3 = document.getElementById("sothu3").value;
    var so4 = document.getElementById("sothu4").value;
    var so5 = document.getElementById("sothu5").value;
    var tong5so =  parseInt(so1) + parseInt(so2) + parseInt(so3) + parseInt(so4) + parseInt(so5);
    document.getElementById('tong5so').value = tong5so ;
}