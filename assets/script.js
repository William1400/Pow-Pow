const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Bullet {

    constructor(x, y) {

        this.radius =  2;
        this.x = x;
        this.y = y;
    }
    
    move() {

        this.y -= 3;// distance / intervalle 
    }

}

class Target {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.radius = random(5, 10); 
    }

}

let target = createTarget();
let bullets = [];// push new bullet
let shoot = false;
let canon = {

    width: 100, 
    height: 25,
    x: canvas.width / 2 - 100 / 2, 
    y: canvas.height - 25 - 10
   
};

function createTarget() {

    let x = random(0, canvas.width);
    let y =  random(0, Math.floor(canvas.height / 4));
    let target = new Target(x, y);
  
    return target;
}


function random(min, max) {

   return Math.floor(Math.random() * (max - min ) + min);
    
}


function drawCanon() {

    ctx.fillStyle = 'blue';
    ctx.fillRect(canon.x, canon.y, canon.width, canon.height);
  
}

function drawCircle(circle) {
  
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    
}

function collide(bullet) {
    
    result = false;
    
    if (bullet.y <= 0) {
        
        result = true;
        
    }
    return result;
}

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
    
    if (e.key == 'ArrowRight') {
        
        if(canon.x <= canvas.width - canon.width - 10) {

           canon.x += 10;
        }

    }
    else if (e.key == 'ArrowLeft') {

        if (canon.x >= 10) {
         
           canon.x -= 10;

        }
    }
    else if (e.keyCode == 32) {
        
        let x = canon.x + canon.width / 2;
        let y = canvas.height - canon.height - 2 * 2;
        bullets.push(new Bullet(x, y));
    
    }

}

setInterval(() => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bullets.forEach((bullet, index, bullets) => {

        if (collide(bullet)) {

            bullets.splice(index, 1);
        }
        else {

            bullet.move();
            drawCircle(bullet);
        }

    })  
    drawCircle(target);
    drawCanon();
    console.log(target);
},1);





