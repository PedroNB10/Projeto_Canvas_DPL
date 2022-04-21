var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

for(var quadrados=0,altura=50,comprimento=50; quadrados<10;quadrados++){
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fillRect( Math.random() * 1000, Math.random() * 1000,altura,comprimento); //serve para falar as dimensões
    console.log(`Total de quadrados:${quadrados}`)
}

for(var circulos=0,posx=100,posy=200; circulos<30;circulos++){
    c.beginPath()//inicio do comando 
    c.arc(Math.random() * 1000, Math.random() * 1000,25,0, Math.PI*2,false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
    c.fillStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}`
    c.fill()
    console.log(`Total de círculos:${circulos}`)
}

for(var retas=0,posx=100,posy=200; retas<10;retas++){
    c.beginPath(); //inicio de comando 
    c.moveTo(Math.random() * 1000,Math.random() * 1000); //início da linha
    c.lineTo(Math.random() * 1000,Math.random() * 1000); // fim da linha
    c.strokeStyle = `#`+`${Math.floor(Math.random()*16777215).toString(16)}` // cor da linha
    c.stroke()// começa a desenhar
    console.log(`Total de retas:${retas}`)
 }

