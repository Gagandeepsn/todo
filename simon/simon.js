let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"];


let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
    started=true;
    Level()
}

})
function flash(btnn){
    btnn.classList.add("white");
 setTimeout(() => {
    btnn.classList.remove("white")
 }, 250);
}

 function Level(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;
let rdno=Math.floor(Math.random()*3);
let index=btns[rdno];
let clss=document.querySelector(`.${index}`);
gameseq.push(index);
console.log("gameseq=",gameseq);
flash(clss);

}

function checkans(idx){
    
    
    if (gameseq[idx]===userseq[idx]) {
        if (userseq.length==gameseq.length) {
            console.log(userseq.length);
            console.log(gameseq.length);
            console.log("same value");
            setTimeout(() => {
                Level();
            }, 500);
        }
        
    }else{
        h2.innerHTML=`<b>Game over your Score was</b> <b>${level} </b><br>Press any key to start`;
        reset();
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(() => {
            body.style.backgroundColor="white";
        }, 150);

    }
    
}

function print() {
    let btn=this;
    // console.log(this);
    flash(btn);
    

     usercolor= btn.getAttribute("id");
     userseq.push(usercolor);
     console.log("userseq=",userseq);
     checkans(userseq.length-1);
}


let all=document.querySelectorAll(".btn");

for(btnss of all){
    btnss.addEventListener("click",print);
}

function reset() {
    started=false;
    level=0;
    gameseq=[];

}