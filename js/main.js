import { BlackBird , BlueBird , WhiteBird} from "./birds.js";

let containerDiv=document.querySelector('.container');
let endContainer=document.querySelector('.endContainer');
let startButton=document.querySelector('#startBtn');
let endButton=document.querySelector('#endBtn');
let birds=[BlackBird,BlueBird,WhiteBird];
let userName=window.location.href.split("&")[1].split("=")[1];
let backgroundAudio=document.createElement('audio');
backgroundAudio.src="../sounds/bgAudio.mp3";
let endSound=document.createElement('audio');
endSound.src="../sounds/end.mp3";

//=============== starting info about the game =================
window.addEventListener('load',function(){
    containerDiv.style.display='block';
    let startMessage=containerDiv.querySelector('.startMessage');
    let hTag=startMessage.querySelector('h1');
    let userNameTitle=document.querySelector('#userName');
    hTag.innerText=`Welcome ${userName}`;
    userNameTitle.innerText=`${userName}`;
    endSound.pause();
    backgroundAudio.play();
});



//=============== button to start the game =================
let arr=[];
startButton.addEventListener('click',()=>{
    containerDiv.style.display='none';
    let time=60;
    let id=setInterval(function(){
        time--;
        document.querySelector("#Timer").innerText=`Time Limit: 00:${time}`;
        const random=Math.floor(Math.random()*birds.length);
        let newBird=new birds[random];
        arr.push(newBird);
        if(time==0){
            clearInterval(id);
            backgroundAudio.pause();
            endSound.play();
            endObject();
            document.querySelector('.content').style.display='none';
            removeBirds(arr);
        }
    },1000); 
});

endButton.addEventListener('click',()=>{
    endContainer.style.display='none';
    window.location.reload();
});

function removeBirds(birdsArr){
    for(let bird in birdsArr){
        birdsArr[bird].remove();
    }
}


function endObject(){
    let htmlScoreObject=document.querySelector('#Score').innerText.split(' ')[1];
    let scoreToCheck=parseInt(htmlScoreObject);

    if(scoreToCheck<120){
        endContainer.style.display='block';
        let endMessage=endContainer.querySelector('.endMessage');
        let hTag=endMessage.querySelector('h1');
        let userName2=document.querySelector('#userName').innerText;
        hTag.innerText=`Sorry ${userName2}, You Lose...!`;
        endMessage.querySelector('p').innerText=`You have achieved ${scoreToCheck} score less than 50 points, You can play again and acieve better score.`
    }else if(scoreToCheck>=120){
        endContainer.style.display='block';
        let endMessage=endContainer.querySelector('.endMessage');
        let hTag=endMessage.querySelector('h1');
        let userName2=document.querySelector('#userName').innerText;
        hTag.innerText=`Wonderful ${userName2}`;
        endMessage.querySelector('p').innerText=`You have achieved ${scoreToCheck}, that's a great score, You can enjoy playing more times.`
        endMessage.querySelector('img').src='../images/surprise.png';
    }
}
