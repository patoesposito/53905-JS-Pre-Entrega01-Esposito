let nombreUsuario = prompt("ingrsar nombre usuario");
let password = prompt("ingresa contraseña");

if (nombreUsuario === "admin" && (password === "secreta" || password === "123456")) {
    console.log("puede acceder")
    alert("password correcto")
}
else {
    console.log("hay algun error, vuelve a insertar los datos");
    alert("password incorrecto")
}

let inciarSesion = prompt("¿Has iniciado sesion? contestar con SI o NO")

if (inciarSesion === "no") {
    console.log("por favor, incia sesion")
}
else {
    console.log("bienvenido de nuevo");
}

function comprobarEdad(){

    const EDAD = parseInt(prompt("ingresar edad"));

    if(EDAD >=18){
        return "es mayor de EDAD"
    }
    else{
        return "No es mayor de EDAD"
    }
}

const resultadoEdad = comprobarEdad();

console.log(resultadoEdad);

let enStock = true;
let precioCondescuento = false;

if (enStock || precioCondescuento) {
    console.log("producto disponible")
}
else {
    console.log("producto agotado")
}


let suma = 0;
let continuar;

do{
    const NUMERO = parseFloat(prompt("ingresar el numero a sumar"));

    if(!isNaN(NUMERO)){
        suma +=NUMERO;
        continuar = prompt("quiere ingresar otro numero(SI o NO)").toLowerCase();
    }
    else{
        alert("ingresamos un numero invalido");
        continuar = "si";
    }
} while(continuar === "si");

alert("la suma total es: " + suma)







