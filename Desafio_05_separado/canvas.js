var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

var random_number = Math.random()

c.fillStyle = "blue";
c.beginPath();
c.moveTo(108*random_number, 0.0*random_number);
c.lineTo(141*random_number, 70*random_number);
c.lineTo(218*random_number, 78.3*random_number);
c.lineTo(162*random_number, 131*random_number);
c.lineTo(175*random_number, 205*random_number);
c.lineTo(108*random_number, 170*random_number);
c.lineTo(41.2*random_number, 205*random_number);
c.lineTo(55*random_number, 131*random_number);
c.lineTo(1*random_number, 78*random_number);
c.lineTo(75*random_number, 68*random_number);
c.lineTo(108*random_number, 0*random_number);
c.closePath();
c.fill();

random_number = Math.random()*2

c.fillStyle = "red";
c.beginPath();
c.moveTo(75*random_number, 40*random_number);
c.bezierCurveTo(75*random_number, 37*random_number, 70*random_number, 25*random_number, 50*random_number, 25*random_number);
c.bezierCurveTo(20*random_number, 25*random_number, 20*random_number, 62.5*random_number, 20*random_number, 62.5*random_number);
c.bezierCurveTo(20*random_number, 80*random_number, 40*random_number, 102*random_number, 75*random_number, 120*random_number);
c.bezierCurveTo(110*random_number, 102*random_number, 130*random_number, 80*random_number, 130*random_number, 62.5*random_number);
c.bezierCurveTo(130*random_number, 62.5*random_number, 130*random_number, 25*random_number, 100*random_number, 25*random_number);
c.bezierCurveTo(85*random_number, 25*random_number, 75*random_number, 37*random_number, 75*random_number, 40*random_number);
c.fill();

random_number = Math.random()*3

c.beginPath();
c.moveTo(100*random_number, 80*random_number);
c.quadraticCurveTo(100*random_number, 46*random_number, 139*random_number, 65*random_number);
c.quadraticCurveTo(140*random_number, 49*random_number, 165*random_number, 65*random_number);
c.quadraticCurveTo(140*random_number, 25*random_number, 130*random_number, 25*random_number);
c.lineTo(127.5*random_number, 35*random_number);
c.lineTo(107.5*random_number, 40*random_number);
c.lineTo(106*random_number, 30*random_number);
c.lineTo(103*random_number, 36*random_number);
c.lineTo(100*random_number, 36.5*random_number);
c.lineTo(97*random_number, 36*random_number);
c.lineTo(94*random_number, 30*random_number);
c.lineTo(92.5*random_number, 40*random_number);
c.lineTo(72.5*random_number, 35*random_number);
c.lineTo(70*random_number, 25*random_number);
c.quadraticCurveTo(60*random_number, 25*random_number, 35*random_number, 65*random_number);
c.quadraticCurveTo(60*random_number, 49*random_number, 59*random_number, 65*random_number);
c.quadraticCurveTo(100*random_number, 46*random_number, 100*random_number, 80*random_number);
c.lineWidth = 2;
c.fillStyle = "#212121";
c.fill();