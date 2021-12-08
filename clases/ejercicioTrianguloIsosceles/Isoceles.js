/**
 * 
 * @param {Number} a side A of triangle 
 * @param {Number} b side B of triangle
 * @param {Number} c side C of triangle
 * @returns height of triangle
 */
function heightTriangulo(a, b, c){
    s = (a+b+c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}


function is_isosceles(a, b, c){
    if(a === b || a === c || b === c) return true;
    return false;
}

function computeHeightIsoscelesTriangle(){
    a = parseInt(document.getElementById("aSide").value);
    b = parseInt(document.getElementById("bSide").value);
    c = parseInt(document.getElementById("cSide").value);
    response = is_isosceles(a,b,c) ? heightTriangulo(a,b,c) : "No es un triangulo Isoceles.";
    
    alert(response);
}