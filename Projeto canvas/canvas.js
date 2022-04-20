var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

c.fillStyle = 'rgba (0, 255,0,0.5)';
//c.fillRect(100,100,100,100); //serve para falar as dimensões

//linha
c.beginPath(); //inicio de comando 
c.moveTo(50,500); //início da linha
c.lineTo(50,200); // fim da linha
c.strokeStyle = "green" // cor da linha
c.stroke()// começa a desenhar

//círculo 

// c.beginPath()//inicio do comando 
// c.arc(50,200,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
// c.strokeStyle = "#F22005"
// c.stroke()



// let quadrados = 0;
// let retas = 0;
// let circulos = 0;

//let posx =0;
// let posy=0;

// Math.floor(Math.random() * 21) - 10;

// for(quadrados;quadrados<=10;quadrados++){
    
//     var altura=100;
//     var comprimento=100;
//     c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    
//     posx= posx+110;
//     posy = posy+110;

// }

for(var quadrados=0,posx=0,posy=10; quadrados<10;quadrados++){
    var altura=100;
    var comprimento=100;
    //posy=10
    c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    posx= posx+110;
  
    // posy = posy+110;
}

for(var circulos=0,posx=50,posy=200; circulos<10;circulos++){
   
   //  c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    c.beginPath()//inicio do comando 
    c.arc(posx,posy,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.strokeStyle = "#F22005"
    c.stroke()
    posx= posx+110

    // posy = posy+110;
}

// for(var circulos=0,posx=Math.random(),posy=Math.random(); circulos<10;circulos++){
   
//     //  c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
//      c.beginPath()//inicio do comando 
//      c.arc(posx,posy,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
//      c.strokeStyle = "#F22005"
//      c.stroke()
//      posx= posx+1000
 
//      // posy = posy+110;
//  }


// while(circulos<10){
 
//     c.arc(400,400,50,0, Math.PI*2,false)

// }