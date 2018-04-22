interface IBox {    
    x : number;
    y : number;
    height : number;
    width : number;
}

class Box {
    public x: number;
    public y: number;
    public height: number;
    public width: number;

    constructor(obj: IBox) {    
        this.x = obj.x;
        this.y = obj.y;
        this.height = obj.height;
        this.width = obj.width;
    }   

    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
}