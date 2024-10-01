var fecha = new Date(1991,10,23);//se puede agregar: anio,mes,dias
//var fecha = new Date("05/25/1996");

//funciones especiales
var dia=fecha.getDate();
var mes = fecha.getMonth();
var anio=fecha.getFullYear();

//alert("LA FECHA DE HOY ES: "+fecha);
alert("dia: "+dia+" mes: "+(mes+1)+" año: "+anio);