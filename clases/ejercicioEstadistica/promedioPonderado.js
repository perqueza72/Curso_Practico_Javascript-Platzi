function promedioPonderado(values, weigth){
    let sum = 0, div = 0;
    for(let i=0; i<values.length; i++){
        sum+= values[i]*weigth[i];
        div+= weigth[i];
    }

    return sum/div;
}