/* ` (CON ALT 96 SE HACE EL BACKTICKS) */


/*var consola = "HOLA CONSOLA";

var pantalla ="HOLA DOCUMENT";

document.write(pantalla);

console.log(consola);*/


/*EJMPLO DE TIPOS DE DATOS*/

/*TIPO STRING*/

/*var nombre = "SOY UN STRING";

console.log(nombre);

/* TIPO DE DATO NUMERICO*/

/*var numero = 1000;

console.log(numero);


/* /* TIPO DE DATO OBJETO*/

/*var objeto = {
    nombre: "Juan",
    apellido: "Diaz",
    celular: 3814123693

}

console.log(objeto);*/

/*let nombre = "Fernando"
let edad = 30*/


/*LAS FUNCIONES PUEDEN RECIBIR VALORES POR EJEMPLO SALUDAR ENVIA EL NOMBRE Y LA EDAD, EJECUTANDO LA FUNCION*/

/*function saludar (nombre,edad){
console.log(`hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar('Luci',25);*/


/*FUNCION DECLARADA

function mostrarNumeros(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

mostrarNumeros();

*/

/* FUNCION QUE DEVUELVE VALOR "RETURN" */ 

/* CUANDO UNA FUNCION DENTRO DEL CUERPO ENCUENTRA UN RETURN, EL COMPILADOR DE DEVUELVE SU VALOR INGORANDO EL RESTO DEL CODIGO"

function unaFuncionQueDevuelveValor(){

    console.log("uno");
    return 19;
    console.log("dos");
    console.log("tres");
    return "La funcion ha devuelto una cadena de texto";
}


let valorDeFuncion=unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);
*/

/* LAS FUNCIONES TAMBIEN PUEDEN ACEPTAR PARAMETROS*/


/* FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS*/

/*function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada");
} /*ACÁ SE DECLARA LA FUNCION

funcionDeclarada() /* ACÁ LLAMO A LA FUNCION

*/


/*FUNCION ANONIMA o EXPRESADA*/ /*NO HACE PONERLE NOMBRE A LA FUNCION PORQUE EL NOMBRE YA LO TIENE LA VARIABLE*/

funcionExpresada();// SI LLAMO ANTES LA FUNCION SALDRÁ UN ERROR DE REFERENCIA PORQUE NO HEMOS DECLARADO LA FUNCION//

const funcionExpresada = function(){
console.log("esto es una funcion expresada es decir una funcion que se le ha asignado como valor a una variable si invocamos esta funcion antes de su definicios JS nos dira... ");
}

funcionExpresada();