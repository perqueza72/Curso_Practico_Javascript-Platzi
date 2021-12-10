const salariosCol = (list) => list.map(

    function(persona){
        return persona.salario;
    }
);

const listSort = (list) => list.sort(
    function(a,b){
        return a-b;
    }
)

function is_pair(number){
    if(number % 2) return false;
    return true;
}

function mediana(list){
    const mitad = parseInt(list.length/2);
    let mediana;

    

    if(is_pair(list.length)){
        mediana = (list[mitad]+list[mitad-1])/2;
    
    }else{
        mediana = list[mitad];
    }

    return mediana;
}

function medianaSalariosGeneral(list){
    list = listSort(salariosCol(list));
    return mediana(list);
}

function mediana10(list){
    list = listSort(salariosCol(list));
    size = list.length;
    size /= 10;

    let topTen = [];
    topTen = list.splice(list.length-size-1, size);
    //for(let i =0; i<size; i++){
    //    topTen.push(list.pop());
    //}
    
    return mediana(topTen);
}