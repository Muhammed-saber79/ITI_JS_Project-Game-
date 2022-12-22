import {Bird} from "./birdClass.js";

class BlackBird extends Bird{
    constructor(){
        super('images/black.gif',15,10,80);
    }
}

class WhiteBird extends Bird{
    constructor(){
        super('images/white.gif',12,5,110);
    }
}

class BlueBird extends Bird{
    constructor(){
        super('images/cyan.gif',10,-10,150);
    }
}

export {BlackBird , BlueBird , WhiteBird};
