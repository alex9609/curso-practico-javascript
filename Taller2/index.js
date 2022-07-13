function trianguloIsoceles(lado1,lado2,base){
    esIsoceles = false;
    if(lado1 == lado2 && lado2 != base){   
        altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2)/4));
    }else if(lado1 == base && base != lado2){
        altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(lado2,2)/4));
    }else if(lado2 == base && base != lado1){
        altura = Math.sqrt(Math.pow(lado2,2) - (Math.pow(lado1,2)/4));
    }else{
        altura = "No es un triangulo isósceles"
    }
    console.log(altura)
}

trianguloIsoceles(12,12,4);
trianguloIsoceles(24,4,24);
trianguloIsoceles(55,55,12);

trianguloIsoceles(10,12,8);
