
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-5;//o -5 serve para não desconfigurar a página com uma barra de rolamento
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

for (var quadrados = 0, posx = 50, posy = 30; quadrados < 10; quadrados++) {
    c.fillStyle = 'red'
    var altura = 100;
    var comprimento = 100;
    c.fillRect(posx, posy, altura, comprimento); //serve para falar as dimensões
    posx = posx + 110;

}

for (var circulos = 0, posx = 100, posy = 200; circulos < 30; circulos++) {
    if (circulos < 10) {

        c.beginPath()//inicio do comando 
        c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
        c.strokeStyle = "black"
        c.stroke()
        c.fillStyle = 'green'
        c.fill()
        posx = posx + 110
    }

    else if (circulos == 11) {

        posx = 100
        posy = 325

        for (var i = 0; i < 10; i++) {
            c.beginPath()//inicio do comando 
            c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
            c.strokeStyle = "black"
            c.stroke()
            c.fillStyle = 'yellow'
            c.fill()
            posx = posx + 110
        }
    }

    else if (circulos == 21) {
        posx = 100
        posy = 450
        for (var i = 0; i < 10; i++) {
            c.strokeStyle = "blue"
            c.beginPath()//inicio do comando 
            c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
            // c.stroke()
            c.strokeStyle = "black"
            c.stroke()
            c.fillStyle = 'blue'
            c.fill()
            posx = posx + 110
        }
    }

}

for (var retas = 0, posx = 100, posy = 200; retas < 10; retas++) {
    c.beginPath(); //inicio de comando 
    c.moveTo(posx, 150); //início da linha
    c.lineTo(posx, 500); // fim da linha
    c.strokeStyle = "orange" // cor da linha
    c.stroke()// começa a desenhar
    posx = posx + 110
}

