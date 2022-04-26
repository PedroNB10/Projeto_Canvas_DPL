
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

//estrela

var random_number = Math.random()
c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
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

//coracao
random_number = Math.random()*2
c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
c.beginPath();
c.moveTo(75*random_number, 40*random_number);
c.bezierCurveTo(75*random_number, 37*random_number, 70*random_number, 25*random_number, 50*random_number, 25*random_number);
c.bezierCurveTo(20*random_number, 25*random_number, 20*random_number, 62.5*random_number, 20*random_number, 62.5*random_number);
c.bezierCurveTo(20*random_number, 80*random_number, 40*random_number, 102*random_number, 75*random_number, 120*random_number);
c.bezierCurveTo(110*random_number, 102*random_number, 130*random_number, 80*random_number, 130*random_number, 62.5*random_number);
c.bezierCurveTo(130*random_number, 62.5*random_number, 130*random_number, 25*random_number, 100*random_number, 25*random_number);
c.bezierCurveTo(85*random_number, 25*random_number, 75*random_number, 37*random_number, 75*random_number, 40*random_number);
c.fill();

//batman
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
c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
c.fill();


*/