var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

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

