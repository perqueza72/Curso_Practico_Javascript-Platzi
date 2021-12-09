function priceWithDiscount(price, discount){
    return price*(100-discount)/100;
}

function CalculatePriceWithDiscount(){
    price = parseInt(document.getElementById("price").value);
    discount = parseInt(document.getElementById("discount").value);
    resultP = document.getElementById("resultP");
    resultP.innerText = `El precio que ha de pagar es de ${priceWithDiscount(price, discount)}$`;
    console.log(price, discount);
    // alert(priceWithDiscount(price, discount));
}