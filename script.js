const button1 = document.querySelector(".num1");
let i = 0;

function calc(){
    i=i+1
    document.querySelector(".num").textContent = i;
}

button1.onclick = calc

//--------------------------------------

const button2 = document.querySelector(".col1")
let col= document.querySelector(".col")

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min)
}
function color(){
    col.style.background = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
}
button2.onclick= color





