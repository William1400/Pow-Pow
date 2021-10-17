class Bullet {


    constructor(image, canvas, ctx, xShip, yShip, shipWidth) {

        this.canvas = canvas;
        this.ctx = ctx;

        this.image = image;

        this.numbColumns = 2;
        this.numbRows = 2;

        this.column = 1;
        this.row = 1;

        this.width = this.image.width / this.numbColumns;
        this.height = this.image.height / this.numbRows;

        this.x = xShip + shipWidth / 2 - this.width / 2;
        this.y = yShip - this.height; 

        this.speed = 10;
    }    

    draw() {

        let sx = this.width * this.column;
        let sy = this.height * this.row;
        let sWidth = this.width;
        let sHeight = this.height;
        let dx = this.x;
        let dy = this.y;
        let dWidth = this.width;
        let dHeight = this.height;

        this.ctx.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); 
        
    }

    move() {

        this.y = this.y - this.speed;   
        
    }
    
}