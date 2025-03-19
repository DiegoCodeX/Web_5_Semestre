

//tener en cuenta los for
// for in para objetos
// for of para arreglos


// // // const PI = 4.1416;

// // // const persona={nombre: "juan", apellido: "perez"}


// // // let nombre = prompt("ingrese su nombre"); //JOptionPane.ShowInputDialog
// // // let edad = prompt("ingrese su edad"); //JOptionPane.ShowInputDialog
// // // alert("hola"+ nombre) ;//jOptionPane.ShowMessageDialog (como el de java
// // // alert(Number+"hola"+ edad); //jOptionPane.ShowMessageDialog (como el de java), combierte numero
// // // console.log("hola"+nombre); //sout como el de java 

// // let p1= prompt("ingrese la edad de la persona uno");
// // let p2= prompt("ingrese la edad de la persona dos");

// // if(p1 >p2){
// // alert("la persona 1 es mayot")

// // }else if (p1< p2){
// // alert("la persona 2 es mayor")
// // }else{
// //     alert("ambas personas tienen la misma edad")
// // }

// const arreglo ={nombre: "Diego", apellido: "ceballlos"};''
// for(const key in arreglo){
// console.log(arreglo[key]);

// }

// const arreglo=["uno", "dos", "tres", "cinco"];
// console.log(arreglo.length)


// //<<<---------FUNCIONES-------------->>>>>>>>>>>>>>
// function suma (a,b){
// return a+b;

// }
// console.log(suma(4,7));

// //<<<---------FUNCIONES Anonimas-------------->>>>>>>>>>>>>>
// const resta = function(a,b){
// return a-b;

// }
// console.log(resta(6,2));

// //<<<---------FUNCIONES Flecha-------------->>>>>>>>>>>>>>

// ()=>{}

// //1. Con un solo parametro

// const tablaDel7=(a)=>{return a*7}
// console.log(tablaDel7(5))

// //1. Sin parametros o varios parametros: necesita parentesis
// const tablaDel7_v2=(a)=>{
// for (let i = 1; i<=10; i++ ){
// console.log("7"+ "* "+ i + " = " + 7*i);
// }
// }
// console.log(tablaDel7_v2())

// //3. con unsa sola linea de cuerpo

// const resta_v3=(a,b)=>{return a-b}
// console.log(resta_v3(5-2));


// EJERCICIO
// Preguntar a un estudiante si desea agregar, eliminar o modificar una nota. 
// Al leer la nota se debe RECALCULAR y MOSTRAR el promedio del curso. 
// Repetir la acción hasta que se indique que no se desean agregar mas notas.
// Al finalizar mostrar el promedio del curso.


let notas = [];

function calcularPromedio() {
    if (notas.length === 0) return 0;
    let suma = notas.reduce((a, b) => a + b, 0);
    return (suma / notas.length)
}

while (true) {
    let opcion = prompt("Escribe una opción:\n- 'agregar' para ingresar una nota\n- 'mostrar' para ver el promedio\n- 'salir' para terminar")

    if (opcion === "agregar") {
        let nuevaNota = parseFloat(prompt("Ingrese la nota (0-5):"));
        if (!isNaN(nuevaNota) && nuevaNota >= 0 && nuevaNota <= 5) {
            notas.push(nuevaNota);
            console.log("Nota agregada correctamente.");
        } else {
            console.log("Error: La nota debe estar entre 0 y 5.");
        }
    } 
    else if (opcion === "eliminar") {
        let indice = parseInt(prompt("Ingrese el índice de la nota a eliminar (0-"
            + (notas.length - 1) + "):"));
            if (!isNaN(indice) && indice >= 0 && indice < notas.length) {
                notas.splice(indice, 1);
                console.log("Nota eliminada correctamente.");
       
    } 
    else if (opcion === "mostrar") {
        console.log("Promedio actual del curso: " + calcularPromedio());
    } 
    else if (opcion === "salir") {
        console.log("Saliendo del programa...");
        break;
    } 
    else {
        console.log("Opción inválida. Inténtalo nuevamente.");
    }
}
}