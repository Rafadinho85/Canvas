var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
lienzo.beginPath();//arrancar un trazo
lienzo.strokeStyle = "blue";//escogimos el color
lienzo.moveTo(100, 100);//nos movimos al punto 100 100
lienzo.lineTo(200, 200);//creamos una linea diagional
lienzo.stroke();//cerramos la linea
lienzo.clossePath();//y terminamos de dibujar
