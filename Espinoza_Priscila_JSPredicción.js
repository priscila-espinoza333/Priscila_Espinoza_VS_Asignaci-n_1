// Pregunta 1 
function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
    //Respuesta: console.log indicará "Nací en 1980"

// Pregunta 2
function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
    // Respuesta: console.log inicará "Naci en 1980"

//Pregunta 3
function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
    // Respuesta: console.log indicará "30"  
    
    // CONDICIONES

    if (condition) {    
        // qué hacer si la condición es verdadera
    }
    else if (2nd condition) { // puede haber desde 0 hasta muchas de estas sentencias    
        // qué hacer si la segunda condición es verdadera
    }
    else {  // puede haber desde 0 o 1 de estas sentencias    
        // qué hacer si ninguna de las condiciones anteriores se cumple
    }

    // EJEMPLO 

    var x = 75;
if (x > 100) {    
    console.log("mayor que 100");
}
else if (x > 50) {    
    console.log(" 50");
}
else if(x > 25) {
    console.log("mayor que 25");
}
else {    
    console.log("número pequeño");
}
// debido a que la primera declaración no es verdadera, pero la segunda declaración es verdadera, imprimirá "mayor que 50" en nuestra consola. Sin embargo, ni siquiera intentará verificar nuestro else if (x> 25) o las declaraciones else porque ya ha encontrado algo en la cadena que es verdadero.

// OPERADORS LOGISTICOS  Y DE COMPARACIÓN 

// == significa igual ejemplo 1 == 2=> false; 1==1 => true
// != significa no es igual ejemplo 1!= 2=> true; 1!= 1=> false
// > significa MAYOR que ejemplo 1 > 2=> false; 2 > 1=> true
// < significa MENOR que ejemplo 1 < 2 => true; 1 < 2 => false
// >= significa MAYOR o igual que 1 >= 2 => false; 2 >= 2 => true
// <= significa MENOR o igual que 1 <= 2 => true; 2 <= 2 => true

                        //ARREGLOS

//Arreglo 1
var produceList = ["manzanas", "naranjas", "jalapeños"];
//Arreglo 2
var accountBalances = [5000, 10, 2500];
//Arreglo 3
var auntsContact = ["Jayne", "Smithe", "Calle Principal 123", "Springfield", "MO", 12345];

                    //PARA AGREGAR se utiliza push ejemplo

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    user.push("jello");
    console.log(user);    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]

                    // PARA ELIMINAR se utiliza pop ejemplo

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    user.pop();
    console.log(user);    // ["Dwight", "Schrute"]

                    // PARA ACCEDER/ACTALIZAR se utilza el número indice  con el priemr valor comenzando en 0 ejemplo
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    console.log(user[0]);    // leyendo el valor -- OUTPUT: Dwight
    user[1] = "Martin";    // actualizando el valor
    console.log(user);    // ["Dwight", "Martin", "beetsbears@battlestar.com"]  
    
                // LENGTH = LONGITUD esto nos indica cuantos valores estan en un arreglo ejemplo 

    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    console.log(user.length);    // 3
    user.pop();
    console.log(user.length);    // 2

    
                // BUCLES : nos permiten hacer la misma operacion varias veces ejemplo
    for (var num = 0; num <= 5; num++) {
    console.log(num);
            }
// observaciones 
//La primera parte, var num = 0, se ejecuta solo una vez
//La segunda parte,  num <= 5, se evalúa. Si es verdadera, ve al paso 3. Si es falsa, ve al paso 6. 
//Ejecuta lo que esté dentro del bloque de código del bucle for (en nuestro caso: console.log(num);
//Ejecuta la tercera parte,num++
//Regresa al paso 2
//Continúa ejecutando el código que viene después del bucle for

                    // BUCLES Y ARREGLOS : se puede utilizar un blucle for para iterar a travez de un arreglo y mirar cada elemento ejemplo

                    var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // imprime el índice       
    console.log(arr[i]);        // imprime el valor del arreglo en ese índice
}
                        //BUCLE FOR :  se utiliza para repetir un proceso cierta cantidad de veces
                        //BUCLES WHILE: se utiliza para repetir un proceso hasta que se cumpla una condición  ejemplo
                        
    while (condition) {    
     // qué seguir haciendo mientras la condición sea verdadera
                }   
    // llegamos a esta línea cuando la condición en el ciclo es falsa
                        
     var num = 0;    // comienza una variable en 0
     while (num <= 5) {    
             console.log(num);    // imprime el valor actual de num    
            num++;       // incrementa num en 1
                    } 
