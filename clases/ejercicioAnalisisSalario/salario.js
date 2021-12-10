function salarioInventadoColombia(){
    let colombia = [];

    for(let i =0; i<100; i++){
        colombia.push({
            name: ("a" + i),
            salario: (1000+Math.random()*100),
        })
    }

    for(let i=0; i<10; i++) colombia.push({
        name: ("b"+i),
        salario: 10000,},)

    return colombia;
}