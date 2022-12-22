class Bird{
    #birdObject;
    #step;
    #score;
    constructor(imageSource,step,score,imageWidth){
        this.#step=step;
        this.#score=score;

        this.#birdObject=document.createElement('img');
        this.#birdObject.src=imageSource;
        this.#birdObject.score=score;
        this.#birdObject.style.width=imageWidth+'px';
        this.#birdObject.style.position='absolute';
        this.#birdObject.style.top=Math.floor(window.innerHeight*Math.random()-parseInt(this.#birdObject.height)-50)+'px';
        document.querySelector('.content').appendChild(this.#birdObject);
        this.moveToRight(this.#step);
        this.hunt();
    }


    hunt(){
        this.#birdObject.addEventListener('click',applyHunt);
    }

    get score(){
        return this.score;
    }

    removeBird(){
        this.#birdObject.style.visibility='hidden';
    }

    moveToRight(birdStep){
        let birdObj=this.#birdObject;
        let left=0;
        let id=setInterval(function(){
            left+=birdStep;
            if(left <= (window.innerWidth-birdObj.width)){
                birdObj.style.left=left+'px';
            }else{
                clearInterval(id);
                birdObj.remove();
            }
        },100);
    }
}



let killedDucks=0;
let newScore=0;
function applyHunt(event){
    let soundObject=document.createElement('audio');
    soundObject.src='../sounds/gun.mp3';
    soundObject.play();
    event.target.style.visibility='hidden';  //this.#birdObject.
    killedDucks+=1;
    newScore+=event.target.score;
    scoreObject(newScore);
    numberOfKilled(killedDucks);
}


function scoreObject(numberOfScore){
    document.querySelector('#Score').innerText=`Score ${numberOfScore}`;
}

function numberOfKilled(killed){
    document.querySelector('#killed').innerText=`Hunted ${killed}`;
}

export {Bird};