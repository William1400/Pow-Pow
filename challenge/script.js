const canvas = document.getElementById('canvasflag');

const ctxL = canvas.getContext('2d');
const ctxM = canvas.getContext('2d');
const ctxR = canvas.getContext('2d');

ctxL.fillStyle = 'dark';
ctxL.fillRect(10, 10, 150, 100);
ctxM.fillStyle = 'yellow';
ctxM.fillRect(100, 10, 150, 100);
ctxR.fillStyle = 'red';
ctxR.fillRect(200, 10, 150, 100);

//////////////////////////////////////////// la taille par défaut 300x150

const canvasboat = document.getElementById('canvasboat');
ctx = canvasboat.getContext("2d");

//voille
ctx.beginPath();      
ctx.moveTo(75,40);   
ctx.lineTo(150,115);  
ctx.lineTo(75,115);  
ctx.closePath();      
ctx.fill();           

// Coque du bâteau
ctx.beginPath();     
ctx.moveTo(25,125);
ctx.lineTo(50,150);
ctx.lineTo(125,150);
ctx.lineTo(150,125);
ctx.lineWidth = 5;         
ctx.fill();            
ctx.stroke();

//////////////////////////////////////////

const canvashouse = document.getElementById('canvashouse');
ctx = canvashouse.getContext("2d");


ctx.beginPath();

ctx.moveTo(25, 75);
ctx.lineTo(200, 75);
ctx.lineTo(115, 25);
ctx.fillStyle = '#8A719D';
ctx.fill();
ctx.closePath();

ctx.fillStyle = '#FED7AE';
ctx.fillRect(25, 75, 175, 100);

ctx.beginPath();
ctx.moveTo(75, 47);
ctx.lineTo(65, 53);
ctx.lineTo(65, 20);
ctx.lineTo(75, 20);
ctx.fillStyle = '#C285A3';
ctx.fill();
ctx.closePath();

ctx.fillStyle = '#FEB57F';
ctx.fillRect(100, 110, 30, 100);

ctx.fillStyle = '#FEECB9';
ctx.fillRect(50, 100, 30, 30);

ctx.fillStyle = '#FEECB9';
ctx.fillRect(150, 100, 30, 30);

///////////////////////////////////////////

const canvasman = document.getElementById('canvasman');
ctx = canvasman.getContext('2d');

ctx.beginPath();
ctx.arc(95, 30, 17, 0, 2 * Math.PI);
ctx.fillStyle = '#FFE1EA'
ctx.strokeStyle = '#F0CFF5';
ctx.lineWidth = 2; 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(87, 26, 2, 0, 2 * Math.PI);
ctx.fillStyle = '#A5CDE8'
ctx.strokeStyle = '#FFFEF5';
ctx.lineWidth = 1; 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(103, 26, 2, 0, 2 * Math.PI);
ctx.fillStyle = '#A5CDE8'
ctx.strokeStyle = '#FFFEF5';
ctx.lineWidth = 1; 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(95, 35, 5, 0, Math.PI, false);
ctx.fillStyle = 'red'
ctx.strokeStyle = '#F0CFF5';
ctx.lineWidth = 2; 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(95, 50, 14, 0, Math.PI, false);
ctx.lineWidth = 2;
ctx.strokeStyle = '#A5CDE8';
ctx.fillStyle = '#FFE1EA';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(93,110);
ctx.lineTo(94, 64);
ctx.lineWidth = 35;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50,100);
ctx.lineTo(80,55);
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(140,100);
ctx.lineTo(110, 55);
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();

ctx.fillStyle = '#FEB57F';
ctx.fillRect(75, 110, 36, 50);

ctx.beginPath();
ctx.moveTo(94,200);
ctx.lineTo(94, 111);
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.arc(83, 150, 8, 0, Math.PI, true);
ctx.fillStyle = 'black'
ctx.strokeStyle = '#F0CFF5';
ctx.lineWidth = 2; 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(104, 150, 8, 0, Math.PI, true);
ctx.fillStyle = 'black'
ctx.strokeStyle = '#F0CFF5';
ctx.lineWidth = 2; 
ctx.fill();
ctx.stroke();
ctx.closePath();







