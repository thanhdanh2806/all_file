
function triangle_shape() {
    var height  = document.getElementById('height').value;
    var width  = document.getElementById('width').value;

    var perimeder =  [parseInt(height) + parseInt(width)] * 2;
    document.getElementById('perimeder').value = perimeder ;

    var area = parseInt(height) * parseInt(width) ;
    document.getElementById('area').value = area ;
}