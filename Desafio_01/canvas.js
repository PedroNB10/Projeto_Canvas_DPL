
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;//insere no canva a largura da tela 
canvas.height = window.innerHeight//insere no canva a altura da tela
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

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

