let player =["❤","😎","😂","👍","😁","💋","😘","😊","😜","✌"]

let fighters = document.getElementById("fighters");
let buttonEle = document.getElementById("button-Ele");

buttonEle.addEventListener("click",()=>{
    let RandFighter1 = Math.floor(Math.random()*3);
    let RandFighter2 = Math.floor(Math.random()*3);
    fighters.textContent =player[RandFighter1] + "Vs" + player[RandFighter2];

})