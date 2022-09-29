document.getElementById("timSoChanLe").onclick = function() {
    for (var e = "", t = "", n = 0; n < 100; n++)
        n % 2 == 0 ? e += n + " " : t += n + " ";
    document.getElementById("txtResult").innerHTML = "Số chẵn: " + e + "<br>👉Số lẻ: " + t
}