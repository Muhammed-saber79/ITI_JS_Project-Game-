class Bird{
    #birdObject;
    #step;
    #score;
    constructor(imageSource,step,score,imageWidth){
        this.#step=step;
        this.#score=score;

        this.#birdObject=document.createElement('img');
        this.#birdObject.src=imageSource;
        this.#birdObject.style.width=imageWidth+'px';
        this.#birdObject.style.position='absolute';
        this.#birdObject.style.top=Math.floor(window.innerHeight*Math.random()-parseInt(this.#birdObject.height)-50)+'px';
        document.querySelector('.content').appendChild(this.#birdObject);
        this.moveToRight(this.#step);
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


export {Bird};