cupones = [
    {name:"Navidad",discount:25},
    {name: "New",discount:30},
    {name:"Birth",discount:50},
    {name:"First",discount:15}
]

let cuponValido = function(cupon){
    return cupon.name === "Navidad"
}

let descuento  = cupones.find(cuponValido);



if(descuento != undefined){
    console.log(descuento);
}else{
    console.log("No hay descuento")
}

function precioDescuento(){

    precio = document.getElementById("precio").value;
    descuento = document.getElementById("descuento").value;

    precioConDescuento =precio - (precio * (descuento/100));

    let mensaje = "El precio con descuento es de " +"$"+precioConDescuento + "cops"

    if(precio == 0){
        mensaje = "El precio no puede ser 0, ingrese un valor valido"
    }

    document.getElementById("respuesta").innerHTML = mensaje;

}
