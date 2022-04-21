var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'


for(var quadrados=0,posx=50,posy=10; quadrados<10;quadrados++){


    c.fillStyle = 'red'
    var altura=100;
    var comprimento=100;
    c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    posx= posx+110;

}

for(var circulos=0,posx=100,posy=200; circulos<30;circulos++){
   
   //  c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
   if(circulos<10){
    c.strokeStyle = "#F22005"
    c.beginPath()//inicio do comando 
    c.arc(posx,posy,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.stroke()
    posx= posx+110
   }

    else if(circulos==11){
       
        posx = 100
        posy = 325
    
            for(var i=0; i<10; i++){
                
                c.strokeStyle = "#F22005"
                c.beginPath()//inicio do comando 
                c.arc(posx,posy,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
                c.stroke()
                
                posx = posx+110
              }   
        }

        else if(circulos==21){
       
            posx = 100
            posy = 450
        
                for(var i=0; i<10; i++){
                    
                    c.strokeStyle = "#F22005"
                    c.beginPath()//inicio do comando 
                    c.arc(posx,posy,50,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
                    c.stroke()
                    
                    posx = posx+110
                  }   
            }

}

for(var retas=0,posx=100,posy=200; retas<10;retas++){
   
    //  c.fillRect(posx,posy,altura,comprimento); //serve para falar as dimensões
    c.beginPath(); //inicio de comando 
    c.moveTo(posx,500); //início da linha
    c.lineTo(posx,200); // fim da linha
    c.strokeStyle = "green" // cor da linha
    c.stroke()// começa a desenhar
    posx= posx+110
 
 
 }

