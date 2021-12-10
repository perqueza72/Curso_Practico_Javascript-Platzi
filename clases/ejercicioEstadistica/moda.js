mapear = (lista) => {
  let mapita = {};
  
  lista.map((dato) =>{

    if(mapita[dato]){
      mapita[dato]++;
    }else{
      mapita[dato] = 1;
    }
})

  return mapita
};

function moda(list){

  let auxMapa = mapear(list);
  lengthMap = Object.keys(auxMapa).length;
  let max = -100;
  let moda;

  console.group("Iteraciones");
  for (var key in auxMapa){
    console.log(key, auxMapa[key]);
    if(auxMapa[key] > max){
      max = auxMapa[key];
      moda = key;
    }
  }
  console.groupEnd();

  return moda;
}