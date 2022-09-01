// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array=[]


for (const property in objeto) {
  array.push([property, objeto[property]])
}
return array
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var diferentes = string.charAt(0)
for (i=0;i<string.length;i++){
  b=0;
  for (j=0;j<diferentes.length; j++){
    if (string.charAt(i) == diferentes.charAt(j)){
      b=1}
}
if (b==0){diferentes=diferentes +string.charAt(i)}
}
object1={}
for (j=0;j<diferentes.length; j++){
  count=0
  
  for (i=0;i<string.length; i++){
    if (diferentes.charAt(j)==string.charAt(i)){
      count=count+1
    }}
    object1[diferentes.charAt(j)]= count 
}
return object1
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var stringOrdenadaMayuscula=''
var stringOrdenadaMinuscula=''
var devolver=''
for (i=0; i< s.length; i++){
  if(s.charAt(i).toUpperCase() == s.charAt(i)){
    stringOrdenadaMayuscula = stringOrdenadaMayuscula + s.charAt(i)
  }
  else{
    stringOrdenadaMinuscula=stringOrdenadaMinuscula + s.charAt(i)
  }
 
}
return stringOrdenadaMayuscula + stringOrdenadaMinuscula
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var palabras=[]
oracion=''
var punto=-1
for (i=0;i<str.length; i++){
  if(str.charAt(i)==' '){
    palabras.push(str.substr(punto+1,(i-punto-1)))
    punto=i
  }
  
  
}
palabras.push(str.substr(punto+1, str.length-1-punto))

function vesrePalabra(element , index){
  vesre=''
  for (i=element.length-1;i>-1;i--){
    vesre=vesre+element.charAt(i)
  }
  oracion= oracion + ' '+ vesre
  return oracion
} 
palabras.forEach(vesrePalabra)
return oracion.substr(1 , oracion.length-1)
}
 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var textoNumero=numero.toString()
var vesre=''
for (i=textoNumero-1, i<-1;i--;){
vesre=vesre+textoNumero.charAt(i)}
if(vesre==textoNumero){return "Es capicua"}
return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   var regreso=''
  for (i=0; i<cadena.length; i++) {
    if(cadena.charAt(i)!=='a' && cadena.charAt(i)!=='b' && cadena.charAt(i)!=='c' ){
      regreso=regreso+cadena.charAt(i)
    }
  }
return regreso
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var devuelve=[]
  function verEnArreglo2(element, index){

if(arreglo2.indexOf(element) !== -1)  
{  
    devuelve.push(element) 
    return devuelve
}  
  }

  arreglo1.forEach(verEnArreglo2)
return devuelve
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

