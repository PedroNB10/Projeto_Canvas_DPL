
//Configurações padrões do canvas
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;//insere no canva a largura da tela 
canvas.height = window.innerHeight//insere no canva a altura da tela
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'


//Desafio 01
for (var quadrados = 0, posx = 50, posy = 30; quadrados < 10; quadrados++) {
    c.fillStyle = 'red'//cor de preenchimento do quadrado
    var altura = 100;
    var comprimento = 100;
    c.fillRect(posx, posy, altura, comprimento); //serve para falar as dimensões
    posx = posx + 110;
    console.log(`Total de quadrados:${quadrados}`)
}

for (var circulos = 0, posx = 100, posy = 200; circulos < 30; circulos++) {
    if (circulos < 10) {
        c.beginPath()//inicio do comando 
        c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
        c.strokeStyle = "black" // cor do contorno 
        c.stroke()// inicia o contorno
        c.fillStyle = 'green'//cor para cobrir a área do círculo
        c.fill() // comando para iniciar o preenchimento da cor
        posx = posx + 110
    }

    else if (circulos == 10) {
        posx = 100
        posy = 325
        for (var i = 0; i < 10; i++) {
            c.beginPath()//inicio do comando 
            c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
            c.strokeStyle = "black"// cor do contorno 
            c.stroke()// inicia o contorno
            c.fillStyle = 'yellow'
            c.fill()// comando para iniciar o preenchimento da cor
            posx = posx + 110
        }
    }

    else if (circulos == 20) {
        posx = 100
        posy = 450
        for (var i = 0; i < 10; i++) {
            c.beginPath()//inicio do comando 
            c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
            c.strokeStyle = "black"// cor do contorno 
            c.stroke()// inicia o contorno
            c.fillStyle = 'blue'
            c.fill()// comando para iniciar o preenchimento da cor
            posx = posx + 110
        }
    }
    console.log(`Total de círculos:${circulos}`)

}

for (var retas = 0, posx = 100, posy = 200; retas < 10; retas++) {
    c.beginPath(); //inicio de comando 
    c.moveTo(posx, 150); //início da linha
    c.lineTo(posx, 500); // fim da linha
    c.strokeStyle = "orange" // cor da linha
    c.stroke()// começa a desenhar
    posx = posx + 110
    console.log(`Total de retas:${retas}`)
}

//Desafio 02
/*
for(var quadrados=0,altura=50,comprimento=50,posx,posy; quadrados<10;quadrados++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.fillStyle = 'red';
    c.fillRect( posx, posy,altura,comprimento); //serve para falar as dimensões
    console.log(`Total de quadrados:${quadrados}`)
}

for(var circulos=0,posx,posy; circulos<30;circulos++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.beginPath()//inicio do comando 
    c.arc(posx, posy,25,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.fillStyle = 'orange'
    c.fill()
    console.log(`Total de círculos:${circulos}`)
}

for(var retas=0; retas<10;retas++){
    c.beginPath(); //inicio de comando 
    c.moveTo(Math.random() * canvas.width,Math.random() * canvas.height); //início da linha
    c.lineTo(Math.random() * canvas.width,Math.random() * canvas.height); // fim da linha
    c.strokeStyle = 'blue'
    c.stroke()// começa a desenhar
    console.log(`Total de retas:${retas}`)
 }

 //Desafio 03
 
for(var quadrados=0,altura=50,comprimento=50,posx,posy; quadrados<10;quadrados++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fillRect( posx, posy,altura,comprimento); //serve para falar as dimensõesfalar as dimensões
    console.log(`Total de quadrados:${quadrados}`)
}

for(var circulos=0,posx,posy; circulos<30;circulos++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.beginPath()//inicio do comando 
    c.arc(posx, posy,25,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fill()
    console.log(`Total de círculos:${circulos}`)
}

for(var retas=0; retas<10;retas++){
    c.beginPath(); //inicio de comando 
    c.moveTo(Math.random() * canvas.width,Math.random() * canvas.height); //início da linha
    c.lineTo(Math.random() * canvas.width,Math.random() * canvas.height); // fim da linha
    c.strokeStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}` // cor da linha
    c.stroke()// começa a desenhar
    console.log(`Total de retas:${retas}`)
 }

 //Desafio 04
 
for(var quadrados=0,altura=50,comprimento=50,posx,posy; quadrados<10;quadrados++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fillRect( posx, posy,altura,comprimento); //serve para falar as dimensõesfalar as dimensões
    console.log(`Total de quadrados:${quadrados}`)
}

for(var circulos=0,posx,posy; circulos<30;circulos++){
    posx = Math.random()*canvas.width
    posy = Math.random()*canvas.height
    var raio = Math.random()*40
    c.beginPath()//inicio do comando 
    c.arc(posx, posy,raio,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fill()
    console.log(`Total de círculos:${circulos}`)
}

for(var retas=0; retas<10;retas++){
    c.beginPath(); //inicio de comando 
    c.moveTo(Math.random() * canvas.width,Math.random() * canvas.height); //início da linha
    c.lineTo(Math.random() * canvas.width,Math.random() * canvas.height); // fim da linha
    c.strokeStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}` // cor da linha
    c.stroke()// começa a desenhar
    console.log(`Total de retas:${retas}`)
 }



//Desafio 05
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
*/