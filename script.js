let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function drawPlayer() {
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
    
    let rightPressed = false;
    let leftPressed = false;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
    drawPlayer();
}

function ennemy() {

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
        ctx.arc(this.spawnX, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        this.x = this.spawnX;
        this.y = this.spawnY;
    }    

    this.init = function() {

        spawnSide = random(0, 2);// 0: haut, 1 droite, 2 gauche.

        spawnCoord =  random(0, canvas.width);

        switch (spawnSide) {

            case 0: this.spawnX = canvas.width;
            break;
            case 1: this.spawnX = spawn.spawnCoord;
            break;
            case 2: this.spawnX = 0;
            break;
        }

        this.radius = random(8, 15);
        
        let randomColor = ["#584B82", "#884872", "#D57A6F", "#213458"];
        this.color = randomColor[random(0, randomColor.length - 1)];

        this.speed = Math.random() * 0.01;

    }
    
}

function random(min, max) {

    return Math.floor(Math.random() * (max - min)) +min;
    
}

let bullets;
let ship;
let speed;
let stats;
let cursors;
let lastFired = 0;

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/ship.png');
    this.load.image('bullet', 'assets/sprites/bullet.png');
}

function create ()
{
    let Bullet = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function Bullet (scene)
        {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');

            this.speed = Phaser.Math.GetSpeed(400, 1);
        },

        fire: function (x, y) {
           
            this.setPosition(x, y - 50);

            this.setActive(true);
            this.setVisible(true);
        },

        update: function (time, delta) {
            
            this.y -= this.speed * delta;

            if (this.y < -50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    bullets = this.add.group({
        
        classType: Bullet,
        maxSize: 10,
        runChildUpdate: true
    });

    ship = this.add.sprite(400, 500, 'ship').setDepth(1);

    cursors = this.input.keyboard.createCursorKeys();

    speed = Phaser.Math.GetSpeed(300, 1);
}

function update (time, delta)
{
    if (cursors.left.isDown)
    {
        ship.x -= speed * delta;
    }
    else if (cursors.right.isDown)
    {
        ship.x += speed * delta;
    }

    if (cursors.up.isDown && time > lastFired)
    {
        let bullet = bullets.get();

        if (bullet)
        {
            bullet.fire(ship.x, ship.y);

            lastFired = time + 50;
        }
    }
}


    
