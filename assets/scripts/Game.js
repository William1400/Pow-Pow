class Game {

    constructor(images) {

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');

        this.images = images;
        this.bgImage = images.bg;

        this.canvas.width = this.bgImage.width * 700 / this.bgImage.height;
        this.canvas.height = this.bgImage.height * 700 / this.bgImage.height;

        this.bgPosition = 0;
        this.bgSpeed = 2;

        this.ship = new Ship(this.images.ship, this.images.laser, this.canvas, this.ctx);

        this.keysPressed = {};
        document.addEventListener('keydown', event => this.keysPressed[event.key] = true);
        document.addEventListener('keyup', event => {

            delete this.keysPressed[event.key];
            if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {

                this.ship.isMovingHorizontally = false;
            }
        });

       
    }

    handleBackground() {

        this.ctx.save();
        this.ctx.translate(0, this.bgPosition);
        this.ctx.drawImage(this.bgImage, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bgImage, 0, -this.canvas.height, this.canvas.width, this.canvas.height);

        this.ctx.restore();
        this.bgPosition = (this.bgPosition + this.bgSpeed) % this.canvas.height;

    }

    handleShip() {

        this.ship.draw();
    }

    handleKeysPressed() {

        let keys = Object.keys(this.keysPressed)
        for (let i = 0; i < keys.length; i++) {

            if (keys[i] == 'ArrowLeft') {

                this.ship.moveLeft();
            }
            if (keys[i] == 'ArrowRight') {

                this.ship.moveRight();
            }
            if (keys[i] == 'ArrowDown') {

                this.ship.moveDown();
            }
            if (keys[i] == 'ArrowUp') {

                this.ship.moveUp();
            }
            if (keys[i] == ' ') {
                 
                this.ship.shoot();
            }
        }

    }

    run() {

        this.handleKeysPressed();
        this.handleBackground();
        this.handleShip();
        
    }


}
