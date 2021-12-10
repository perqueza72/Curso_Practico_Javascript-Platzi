function mediana(list){

    list.sort((a,b) => {
        return a-b;
    });

    midPos = parseInt((list.length-1)/2);

    if(list.length % 2 === 0){
        return ((list[midPos]+list[midPos+1])/2);    
    }
    return list[midPos];
}