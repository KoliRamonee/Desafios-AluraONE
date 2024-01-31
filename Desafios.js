//1.
let listaGenerica = [];

//2.
let lengDeProg = ["JavaScript","C","C++","Kotlin","Python"];

//3.
lengDeProg.push("Java", "Ruby", "GoLang")

//4.
function mostrarLista(){
    for(let i = 0; i < lengDeProg.length; i++){
        console.log(lengDeProg[i]);
    }
 
}
mostrarLista();

//5.
function mostrarLenguagesReversa() {
    for (let i = lengDeProg.length - 1; i >= 0; i--) {
      console.log(lengDeProg[i]);
    }
  }
mostrarLenguagesReversa();

//6.
function promedioElementos(listaNum){
    let suma = 0;
    for (let i=0; i< listaNum.length; i++){
        suma += listaNum[i];
    }
    return suma / listaNum.length;
}
let listaNum = [11, 24, 25, 34, 45];
let promNum = promedioElementos(listaNum);
console.log('Promedio: ',promNum)

//7.
function mostrarMenorMayor(listNum){
    let mayor = listNum[0];
    let menor = listNum[0];
    for (let i = 1; i < listNum.length; i++){
        if(listNum > mayor ){
            mayor = listNum[i];
        }
        if(listNum< menor){
            menor = listNum[i];
        }
    }
    console.log("Mayor:", mayor);
    console.log("Menos:", menor);
}
let num = [15,6,33,543,13];
mostrarMenorMayor(num)

//8.
function sumaLista(lista){
    let suma = 0;
    for (let i= 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}
let numeros = [13, 5, 20, 7, 15];
let suma = sumaLista(numeros);
console.log('La suma es: ', suma)

//9.
function indiceElem(lista, elemento){
for (let i= 0; i < lista.length;i++){
    if (lista[i]===elemento){
        return i;
    }
}
return -1;
}
let num1=[1,3,4,6,5,6];
let elem=indiceElem(num1,6);
console.log('Indice:', elem);

//10.
function sumarListas(lista1, lista2){
    if(lista1.lenght != lista2.lenght){
        console.log("La longitud de las listas no es igual");
        }
let resultado =[];
    for(let i=0; i < lista1.length; i++){
        resultado.push(lista1[i]+lista2[i]);
    }
    return resultado;
}
let lista1 = [1,2,3,4,5];
let lista2 = [5,4,3,2,1];
let resultadoSuma = sumarListas(lista1,lista2);
console.log(`Lista 1: [${lista1}]`);
console.log(`Lista 1: [${lista2}]`);
console.log(`El resultado de la suma es: [${resultadoSuma}]`);

//11.
function cuadradoNum(lista){
    let cuad = [];
    for (let i = 0; i < lista.length; i++){
        cuad.push(lista[i]*2);
    }
    return cuad;
}
let nume = [1,2,3,4,5,6];
let cuadrados = cuadradoNum(nume);
console.log(`Lista original: [${nume}]`)
console.log(`Cuadrados de lista: [${cuadrados}]`)