window.onload = function(){
	multiplicar();
	dividir();
	somar();
	subtrair();
}

function multiplicar(){

	var resgate = document.getElementById("calculo");
	var X = +resgate.valorA.value;
	var Y = +resgate.valorB.value;
	var mult = X*Y;
	resgate.result.value = mult;
}

function dividir(){

	var resgate = document.getElementById("calculo");
	var X = +resgate.valorA.value;
	var Y = +resgate.valorB.value;
	var mult = X/Y;
	resgate.result.value = mult;
}

function somar(){

	var resgate = document.getElementById("calculo");
	var X = +resgate.valorA.value;
	var Y = +resgate.valorB.value;
	var mult = X+Y;
	resgate.result.value = mult;
}

function subtrair(){

	var resgate = document.getElementById("calculo");
	var X = +resgate.valorA.value;
	var Y = +resgate.valorB.value;
	var mult = X-Y;
	resgate.result.value = mult;
}
 
