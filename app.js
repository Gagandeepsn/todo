let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function () {
    let li=document.createElement("li");
    li.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
//    delbtn.addEventListener("click",function(){
//         ul.removeChild(li);
//         })



    
     delbtn.classList.add("delete");
     li.appendChild(delbtn);
    
    ul.appendChild(li);
    inp.value="";
    
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let list= event.target.parentElement;
        list.remove();
    }
    
    
})

// delbtn.addEventListener("click",function(){
// ul.removeChild(li);
// })