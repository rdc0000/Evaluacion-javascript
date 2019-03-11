//1.1 funcion normal
function ejemplo1(){
    console.log('Hola');
}
ejemplo1();
//funcion anonima
const suma= function () {
    console.log(1+2);
}
suma();

//funcion landa
var res=(num1,num2) => {
    var resul=(num1+num2);
    return resul;
}
console.log(res(23,40));

/*var mensaje='';
let num1=prompt("Digite numero");
let num2=prompt("Digite numero");
if(num1>num2){
    mensaje='El numero mayor es '+ num1;
    console.log(mensaje);
} 
if(num1<num2){
    mensaje='El numero menor es '+ num1;
    console.log(mensaje);
}
if(num2==num1){
    mensaje='Los numeros son iguales';
    console.log(mensaje);
}
console.log(num1,num2);*/

var obligatorio=document.querySelectorAll('.obligatorio');
console.log(obligatorio);
var email=document.getElementById('email');
console.log(email);
