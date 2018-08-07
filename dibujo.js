var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea=30;
var l=0;
var yi, xf;
var colorcito = "blue";

for(l = 0; l < linea; l++){
  yi= 10 * l;
  xf= 10 * (l+1);
  dibujarLinea(colorcito,  0, yi, xf, 300);
  dibujarLinea(colorcito, 0, (300-yi), xf, 0);
  dibujarLinea(colorcito,  300, yi, (300-xf), 300);
  dibujarLinea(colorcito, 300, (300-yi), (300-xf), 0);

}
dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);
dibujarLinea(colorcito, 299, 1, 299, 299);
dibujarLinea(colorcito, 1, 1, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
