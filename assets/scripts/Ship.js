class Ship {

    static spritesConfig = {

        numbColumns: 5,
        numbRows: 2
    }

    constructor(image, canvas, ctx) {

        this.canvas = canvas;
        this.ctx = ctx;

        this.image = image;

        this.column = 2;
        this.row = 0;

        this.width = this.image.width / 5;
        this.height = this.image.height / 2;

        this.x = this.canvas.width / 2 - this.width / 2;
        this.y = this.canvas.height - this.height;

        this.thrusterAnimationFrame = 0;
        this.thrusterAnimationFrames = 15;

        this.speed = 10;

        this.leftAnimationFrame = 0;
        this.rigthAnimationFrame = 0;
        this.xAnimationFrames = 1;
        this.isMovingLeft = false;
        this.isMovingRight = false;

    }

    draw() {
        console.log(this.column);
        let sx = this.width * this.column;
        let sy = this.height * this.row;
        let sWidth = this.width;
        let sHeight = this.height;

        let dx = this.x;
        let dy = this.y;
        let dWidth = this.width;
        let dHeight = this.height;

        if (!this.isMovingLeft || !this.isMovingRight) {

            if (this.column > 2) {
                
                this.updateLeftAnimation(2);
            }
            else if (this.column <2){

                this.updateRigthAnimation(2);
            }
        }
      
        this.updateThrusterAnimation();
        this.ctx.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);


    }

    updateThrusterAnimation() {

        if (this.thrusterAnimationFrame == this.thrusterAnimationFrames) {

            this.row = (this.row + 1) % Ship.spritesConfig.numbRows;
            this.thrusterAnimationFrame = 0;

        }
        else {
            this.thrusterAnimationFrame++;
        }
    }

    moveLeft() {

        if (this.x - this.speed >= 0) {

            this.x = this.x - this.speed;
            this.updateLeftAnimation(0);
            this.isMovingLeft = true;
        }

    }

    moveRight() {

        if (this.x + this.speed + this.width <= this.canvas.width) {

            this.x = this.x + this.speed;
            this.updateRigthAnimation(Ship.spritesConfig.numbColumns - 1);
            this.isMovingRight = true;
        }

    }

    moveDown() {

        if (this.y + this.speed + this.height <= this.canvas.height) {

            this.y = this.y + this.speed;
        }

    }

    moveUp() {

        if (this.y - this.speed >= 0) {

            this.y = this.y - this.speed;
        }

    }

    updateLeftAnimation(column) {

        if (this.column > column && this.leftAnimationFrame == this.xAnimationFrames) {

            this.column--;
            this.leftAnimationFrame = 0;
        }
        else {

            this.leftAnimationFrame++;
        }

    }

    updateRigthAnimation(column) {

        if (this.column < column && this.rigthAnimationFrame == this.xAnimationFrames) {

            this.column++;
            this.rigthAnimationFrame = 0;
        }
        else {

            this.rigthAnimationFrame++;
        }

    }
}



