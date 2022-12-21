//import { startTimer } from "./functions";

let containerDiv=document.querySelector('.container');
let startButton=document.querySelector('#startBtn');

window.addEventListener('load',function(){
    containerDiv.style.display='block';
    let startMessage=containerDiv.querySelector('.startMessage');
    let hTag=startMessage.querySelector('h1');
    let userNameTitle=document.querySelector('#userName');
    let userName=this.location.href.split("?")[1].split("&")[1].split("=")[1];
    hTag.innerText=`Welcome ${userName}`;
    userNameTitle.innerText=`Welcome ${userName}`;
});

startButton.addEventListener('click',()=>{
    containerDiv.style.display='none';
    let time=60;
    let id=setInterval(function(){
        time--;
        document.querySelector("#Timer").innerText=`Time Limit: 00:${time}`;
        if(time==0){
            clearInterval(id);
        }
    },1000);
});


