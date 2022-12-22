import { BlackBird , BlueBird , WhiteBird} from "./birds.js";

let containerDiv=document.querySelector('.container');
let startButton=document.querySelector('#startBtn');
let birds=[BlackBird,BlueBird,WhiteBird];

//=============== starting info about the game =================
window.addEventListener('load',function(){
    containerDiv.style.display='block';
    let startMessage=containerDiv.querySelector('.startMessage');
    let hTag=startMessage.querySelector('h1');
    let userNameTitle=document.querySelector('#userName');
    let userName=this.location.href.split("&")[1].split("=")[1];  //split("?")[1].
    hTag.innerText=`Welcome ${userName}`;
    userNameTitle.innerText=`Welcome ${userName}`;
});



//=============== button to start the game =================
startButton.addEventListener('click',()=>{
    containerDiv.style.display='none';
    let time=60;
    let id=setInterval(function(){
        time--;
        document.querySelector("#Timer").innerText=`Time Limit: 00:${time}`;
        const random=Math.floor(Math.random()*birds.length);
        let newBird=new birds[random];
        if(time==0){
            clearInterval(id);
        }
    },1000);    
});









// function fly(){   
//     let left=0;
//     let birdObject=document.createElement('img');
//     birdObject.src='images/black.gif';
//     birdObject.style.width='100px';
//     birdObject.style.position='absolute';

//     let id=setInterval(()=>{
//         console.log('i am fncion'); 
//         left+=10;
//         document.querySelector('.content').appendChild(birdObject);
//         if(left<=(window.innerWidth)){
//             birdObject.style.left=left+'px';
//         }else{
//             clearInterval(id);
//             birdObject.remove();
//         }
        
//     },100);
// }









