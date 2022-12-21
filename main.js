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
    fly();
});


function fly(){   
    let left=0;
    let id=setInterval(()=>{
        console.log('i am the function...!'); 
        left+=20;
        let birdObject=document.createElement('img');
        birdObject.src='../images/black.gif';
        if(birdObject.style.left<=(window.innerWidth-birdObject.width)){
            birdObject.style.left=left+'px';
        }else{
            clearInterval(id);
            birdObject.remove();
        }
        
    });
}


