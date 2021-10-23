function roll(){
var dieOne = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute ("src", "images/dice"+dieOne+".png");
var dieTwo = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute ("src", "images/dice"+dieTwo+".png");
    var result ;
    if (dieOne > dieTwo){
        result = document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!"
    }else if  (dieOne < dieTwo){
        result = document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩"
    }else{
        result = document.querySelector(".container h1").innerHTML = "Draw!"
    }
    return 0;
}
