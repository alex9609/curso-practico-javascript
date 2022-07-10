
function perimetroCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value
    mensaje = "El perimetro del cuadrado es : "
    if(lado == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        mensaje += (lado * 4);
    }
    document.getElementById("respuestaCuadrado").innerHTML = mensaje;
} 

function areaCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value
    mensaje = "El area del cuadrado es : "
    if(lado == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        mensaje += (lado * lado);
    }
    document.getElementById("respuestaCuadrado").innerHTML = mensaje;
}


function perimetroTriangulo(){

    let ladoDerecho = document.getElementById("ladoDerecho").value;
    let ladoIzquierdo = document.getElementById("ladoIzquierdo").value;
    let base = document.getElementById("base").value;

    mensaje = "El perimetro del triangulo es : "

    if(ladoDerecho == "" || ladoIzquierdo == "" || base == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        let respuesta = parseFloat(ladoDerecho) + parseFloat(ladoIzquierdo) + parseFloat(base)
        mensaje+= respuesta;
    }

    document.getElementById("respuestaTriangulo").innerHTML = mensaje;

    
}


function areaTriangulo(){
    let altura = document.getElementById("altura").value;
    let base = document.getElementById("base").value;

    mensaje = "El area del triangulo es : "
    if(altura == "" || base == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        let respuesta = (parseFloat(base) * parseFloat(altura))/2
        mensaje+= respuesta;
    }
    document.getElementById("respuestaTriangulo").innerHTML = mensaje;

}
    

console.groupEnd();

console.group("Circulos")
//Diametro
function diametroCirculo(){

    let radio = document.getElementById("radio").value;

    mensaje = "El diametro del circulo es : "
    if(radio == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        let respuesta = parseFloat(radio) * 2
        mensaje += respuesta; 
    }
    document.getElementById("respuestaCirculo").innerHTML = mensaje;
} 

function diametroCirculoRadio(radio){
    return radio*2;
} 
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(){
    let radio = document.getElementById("radio").value;

    mensaje = "El perimetro del circulo es : "
    if(radio == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        let respuesta = diametroCirculoRadio(radio) * PI;
        mensaje += respuesta; 
    }
    document.getElementById("respuestaCirculo").innerHTML = mensaje;
}
//Area
function areaCirculo(){
    let radio = document.getElementById("radio").value;

    mensaje = "El area del circulo es : "
    if(radio == ""){
        mensaje = "Ingrese un valor valido"
    }else{
        let respuesta = (parseFloat(radio) * parseFloat(radio)) * PI;
        mensaje += respuesta; 
    }
    document.getElementById("respuestaCirculo").innerHTML = mensaje;
}
