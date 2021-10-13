/*DENTRO DE LOS OBJETOS LA VARIABLES SE LLAMAN ATRIBUTOS/PROPIEDADES Y A LAS FUNCIONES SE LAS LLAMA METODOS*/

const usuario = {
    
    nombre: "Fernando",
    apellido: "Valle",
    edad: 30,
    pasatiempos:["correr", "dj", "fiestas electronicas"],//a los array se accede con el nro de indice del array [1]//
    soltero: false,
    contacto:{ //a los objetos dentro de lo
        mail:"vallefernando884@gmail.com",
        celular: "3814123693",
        Instagram: "fervalle91"
    },

    saludar: function () {
        console.log("Hola gente manija")
    },

    decirNombre: function(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} tengo ${this.edad} años mi email es ${this.contacto.mail} y mi pasatiempo favorito es ir a ${this.pasatiempos[2]}`)
    }

}

usuario.decirNombre();
usuario.saludar();
//console.log(usuario);

//console.log(usuario["nombre"]);

