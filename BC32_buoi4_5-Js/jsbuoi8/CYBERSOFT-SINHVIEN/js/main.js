document.getElementById('btnSVCaoDiemNhat').onclick = function() {
    let scoreEls = document.getElementsByClassName("td-scores");
    console.log(scoreEls);

    let score = [...scoreEls].map((element) => {
        return +element.innerHTML;
    });
    console.log(score);

    // tìm diểm cao nhất
    // cach1
    // let max = score[0]
    // for(let i = 1 ; i < score.length; i++) {
    //     if(score[i] > max) {
    //         max = score[i];
    //     }
    // }
    // console.log("điểm cao nhất", max);

    let max = Math.max(...score);
    console.log("diểm cao nhất:", max);

};

document.getElementById("btnSVDiemHon5").onclick = function() {
    let scoreEls = document.getElementsByClassName("td-scores");
    console.log(scoreEls);

    let score = [...scoreEls].map((element) => {
        return +element.innerHTML;
    });
    console.log(score);

}
