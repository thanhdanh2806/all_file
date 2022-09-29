
function handleLogin() {
    var usd  = document.getElementById("usd").value;
    var sotienla =  parseInt(usd) * 23.500 ;
    document.getElementById('vnd').value = sotienla + 'vnd';
}