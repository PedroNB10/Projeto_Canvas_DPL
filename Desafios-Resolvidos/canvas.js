
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

*/
