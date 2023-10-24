let h1=document.querySelector("h1");

// function changecolor(color,delay,newcolor) {
//     setTimeout(() => {
//         h1.style.color=color;
//     }, delay);
//     // if (newcolor) {
//         newcolor();
//     // }
// }


//     changecolor("yellow",1000,()=>{
//         changecolor("green",2000,()=>{
//             changecolor("blue",3000);
//         });
//     });


// function changecolor(color,delay) {
    
// new Promise((resolve, reject) => {
//     setTimeout(() => {

//    let num=Math.floor(Math.random()*5)+1;
//   if (num>3) {
//     reject("promise rejected")
//  }

//     h1.style.color=color;
//     resolve("color changed")
// }, delay);
    
// })

    
// }

// async function demo() {
//     try {
//         await changecolor("red",1000);
//         await changecolor("yellow",1000);
//         await changecolor("blue",1000);
        
//     } catch (error) {
//         console.log("fuck",error);
//     }
// }

// let a=5;
// console.log("dgyqydwb",a);

// let avg='{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}'

// let amg=JSON.parse(avg);
// console.log(amg.fact);


// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
    
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);

// })

// .catch((err)=>{
//     console.log(err);
// })





//important api calling//
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
let fact=await getfacts();
console.log(fact);
let p=document.querySelector("p");
p.innerText=fact;

})
let url="https://catfact.ninja/fact";


async function getfacts(){
    try{
        let res=await axios.get(url);
        return(res.data.fact);

    }
    catch(e){
        console.log("error",e);

    }
}


let btn1=document.querySelector(".dog");
btn1.addEventListener("click",async()=>{
let image=await getimage();
console.log(image);
img=document.querySelector("img");
img.setAttribute("src",image);

})



let url2="https://dog.ceo/api/breeds/image/random";
async function getimage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;


    }
    catch(e){
        console.log("error",e);

    }
}
