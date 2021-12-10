const lista1 = [

    100,
    200,
    300,
    500,
];

function sumaList(list){
    let suma = 0;
    for(let i =0; i<list.length; i++){
        suma+= list[i];
    }

    return suma;
}

const reduceSumaList = (list) =>
    list.reduce(
        function(suma = 0, element ){
            return suma + element;
        }
    );

function promList(list){
    return reduceSumaList(list)/list.length;
}

