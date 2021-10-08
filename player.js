

    
    constructor(gameWidth, gameHeigth) {

        this.width = 150;
        this.heigth = 30;

        this.position = {

            x: gameWidth / 2 - this.width / 2,
            y: gameHeigth - this.heigth - 10
        };
    }

    draw(ctx) {

        ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);

    }
   
