var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

c.fillStyle = "blue";
c.beginPath();
var aleatory_number = Math.random()

c.moveTo(108*aleatory_number, 0.0*aleatory_number);
c.lineTo(141*aleatory_number, 70*aleatory_number);
c.lineTo(218*aleatory_number, 78.3*aleatory_number);
c.lineTo(162*aleatory_number, 131*aleatory_number);
c.lineTo(175*aleatory_number, 205*aleatory_number);
c.lineTo(108*aleatory_number, 170*aleatory_number);
c.lineTo(41.2*aleatory_number, 205*aleatory_number);
c.lineTo(55*aleatory_number, 131*aleatory_number);
c.lineTo(1*aleatory_number, 78*aleatory_number);
c.lineTo(75*aleatory_number, 68*aleatory_number);
c.lineTo(108*aleatory_number, 0*aleatory_number);
c.closePath();
c.fill();

var aleatory_number = Math.random()*2
c.fillStyle = "red";
c.beginPath();
c.moveTo(75*aleatory_number, 40*aleatory_number);
c.bezierCurveTo(75*aleatory_number, 37*aleatory_number, 70*aleatory_number, 25*aleatory_number, 50*aleatory_number, 25*aleatory_number);
c.bezierCurveTo(20*aleatory_number, 25*aleatory_number, 20*aleatory_number, 62.5*aleatory_number, 20*aleatory_number, 62.5*aleatory_number);
c.bezierCurveTo(20*aleatory_number, 80*aleatory_number, 40*aleatory_number, 102*aleatory_number, 75*aleatory_number, 120*aleatory_number);
c.bezierCurveTo(110*aleatory_number, 102*aleatory_number, 130*aleatory_number, 80*aleatory_number, 130*aleatory_number, 62.5*aleatory_number);
c.bezierCurveTo(130*aleatory_number, 62.5*aleatory_number, 130*aleatory_number, 25*aleatory_number, 100*aleatory_number, 25*aleatory_number);
c.bezierCurveTo(85*aleatory_number, 25*aleatory_number, 75*aleatory_number, 37*aleatory_number, 75*aleatory_number, 40*aleatory_number);
c.fill();



c.beginPath();
c.moveTo(100, 80);
c.quadraticCurveTo(100, 46, 139, 65);
c.quadraticCurveTo(140, 49, 165, 65);
c.quadraticCurveTo(140, 25, 130, 25);
c.lineTo(127.5, 35);
c.lineTo(107.5, 40);
c.lineTo(106, 30);
c.lineTo(103, 36);
c.lineTo(100, 36.5);
c.lineTo(97, 36);
c.lineTo(94, 30);
c.lineTo(92.5, 40);
c.lineTo(72.5, 35);
c.lineTo(70, 25);
c.quadraticCurveTo(60, 25, 35, 65);
c.quadraticCurveTo(60, 49, 59, 65);
c.quadraticCurveTo(100, 46, 100, 80);
c.lineWidth = 2;
c.fillStyle = "#212121";
c.fill();