function rollOne (){
    var dieOne = Math.floor(Math.random() * 6) + 1;

    return dieOne;
}

function rollTwo (){
     var dieTwo = Math.floor(Math.random() * 6) + 1;
 
     return dieTwo;
 }



function roll (){
     var el1 = document.querySelector(".img1");
     var el2 = document.querySelector(".img2");
     el1.setAttribute ("src", "images/dice"+rollOne()+".png");
     el2.setAttribute ("src","images/dice"+rollTwo()+".png");
}
