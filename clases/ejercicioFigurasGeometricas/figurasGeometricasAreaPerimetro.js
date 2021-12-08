/**
 * 
 * @param {Number} n_lados 
 * @param {Array<Numbers>} medidas 
 */
 function perimetro(n_lados, medidas){
    let per = 0;
    for(i = 0; i<medidas.length; i++){
        per += medidas[i]
    }
    return per;
}

function areaCuadrado(base, altura){
    return base*altura;
}

function areaTriangulo(base, altura){
    return areaCuadrado(base/2, altura);
}

function areaCirculo(radio){
    return Math.PI*radio*radio;
}

function perimetroCirculo(radio){
    return 2*Math.PI*radio;
}


console.group("Perimetros");
    console.log(perimetro(5, [1,2,3,4,5]));
    console.log(perimetro(5, [1,2,3,4,5]));
    console.log(perimetro(5, [1,2,3,4,5]));
	console.log(areaCirculo(4));
console.groupEnd();

console.group("Areas");
	console.log(areaTriangulo(10, 20));
	console.log(areaCuadrado(10,20));
	console.log(perimetroCirculo(4));
console.groupEnd();


function calcularPerimetro(){
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    alert(perimetro(4, [value, value, value, value]));
}

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    alert(areaCuadrado(value, value));
}