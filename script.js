let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

//function player() {

    ctx.beginPath();
    ctx.fillRect(10, 145, 25, 5);
    ctx.fillStyle = "#884872";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillRect(20, 140, 5, 10);
    ctx.fillStyle = "#884872";
    ctx.fill();
    ctx.closePath();
    
//}

///function ennemy {

    this.x = 0;
    this.y = 0; 
    this.spawnX = 0;
    this.spawnY = 0;
    this.radius = 0;
    this.color = "#D57A6F";
    this.speed = 0; 
    this.alive = true;

    this.spawn = function () {

        ctx.beginPath();
        ctx.arc(this.spawnX, this.spawnY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        this.x = this.spawnX;
        this.y = this.spawnY;
    }    
    
//}