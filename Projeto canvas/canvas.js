var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

c.fillStyle = 'rgba (0, 255,0,0.5)';
//c.fillRect(100,100,100,100); //serve para falar as dimensões


c.beginPath(); //inicio de comando 
c.moveTo(50,500); //início da linha
c.lineTo(300,100); // fim da linha
c.strokeStyle = "green" // cor da linha
c.stroke()// começa a desenhar


c.beginPath()//inicio do comando 
c.arc(400,400,60,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
c.strokeStyle = "#F22005"
c.stroke()



let quadrados = 0;
let retas = 0;
let circulos = 0;

let posx =0;
let posy=0;

// Math.floor(Math.random() * 21) - 10;

for(quadrados;quadrados<=10;quadrados++){
    
    var altura=100;
    var comprimento=100;
    c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    
    posx= posx+110;
    posy = posy+110;

}