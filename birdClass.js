class bird{
    constructor(imageSource,step,score){
        this.src=imageSource;
        this.step=step;
        this.score=score;

        this.bird=document.createElement('img');
        bird.src=this.src;
        bird.style.position='absolute';
        bird.style.left=-bird.style.width+'px';
        bird.style.top=Math.floor(window.innerHeight*Math.random())+'px';
        document.querySelector('body').appendChild(this.bird);
        this.moveToRight(this.step);
    }


    moveToRight(birdStep){
        let id=setInterval(function(){
            if(bird.style.left <= (window.innerWidth-bird.style.width)){
                this.bird.style.left+=birdStep+'px';
            }else{
                clearInterval(id);
                this.bird.remove();
            }
        });
    }
}


export {bird};