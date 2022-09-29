function demSoChia3() {
    for (var e = 0, t = 0; t < 1000; t++)
        t % 3 == 0 && e++;
    document.getElementById("txtResult2").innerHTML = "Số chia hết cho 3 có : " + e + " số"
}