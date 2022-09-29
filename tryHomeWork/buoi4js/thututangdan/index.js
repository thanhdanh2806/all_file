document.getElementById("sortNumber").onclick = function () {
  var e = Number(document.getElementById("inputNum1").value),
    t = Number(document.getElementById("inputNum2").value),
    n = Number(document.getElementById("inputNum3").value),
    a = document.getElementById("txtSortNumber");

    a.innerHTML = 
    
          e > t ? 
          t > n ? 
          n + " < " + t + " < " + e :

          e > n ? 
          t + " < " + n + " < " + e : 
          t + " < " + e + " < " + n :
          
          t > n ?
          e > n ?
          n + " < " + e + " < " + t : 
          e + " < " + n + " < " + t :
          e + " < " + t + " < " + n ;

};
