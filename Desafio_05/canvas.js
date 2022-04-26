var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

c.fillStyle = "blue";
c.beginPath();
const aleatory_number = Math.random()



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

c.fillStyle = "red";
c.beginPath();
c.moveTo(75, 40);
c.bezierCurveTo(75, 37, 70, 25, 50, 25);
c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
c.bezierCurveTo(20, 80, 40, 102, 75, 120);
c.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
c.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
c.bezierCurveTo(85, 25, 75, 37, 75, 40);
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