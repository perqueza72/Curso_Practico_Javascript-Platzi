const cupon = [
    {
        nombre: "a",
        valor: 10,
    },
    {
        nombre: "b",
        valor: 20,
    },
    {
        nombre: "c",
        valor: 30,
    },
];

function priceWithDiscount(price, discount){
    return price*(100-discount)/100;
}

function precioAPagar(price, cuponName){
    let reclamarCupon = cupon.find(element => element.nombre === cuponName);
    if(typeof reclamarCupon === 'undefined') reclamarCupon = 0;

    price = priceWithDiscount(price, reclamarCupon.valor);
    return price;
}

function calcularPrecioAPagar(){
    let price = parseInt(document.getElementById("Precio").value);
    let cupon = document.getElementById("Cupon").value;
    let resultado = document.getElementById("ResultLabel");
    let totalPrice = precioAPagar(price, cupon);
    
    resultado.innerText = `El precio que has de pagar es: ${totalPrice}`;
}