import {Bird} from "./birdClass.js";

class BlackBird extends Bird{
    constructor(){
        super('images/black.gif',15,50,80);
    }
}

class WhiteBird extends Bird{
    constructor(){
        super('images/white.gif',12,50,110);
    }
}

class BlueBird extends Bird{
    constructor(){
        super('images/cyan.gif',10,50,150);
    }
}

export {BlackBird , BlueBird , WhiteBird};
