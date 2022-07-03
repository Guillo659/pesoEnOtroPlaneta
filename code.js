// Obtener el peso y el boton, luego agregarle
// un evento de escucha al boton con una función
let peso = document.getElementById("peso_tierra");
let boton = document.getElementById("sended");
boton.addEventListener("click", calcularMasa);

// Obetener los <p> a modificar
let escriPesoLuna = document.getElementById("peso_luna");
let escriPesoMarte = document.getElementById("peso_marte");

// Declarar constantes con la gravedad de los Planetas
const gTierra = 9.81;
const gLuna =  1.622;
const gMarte = 3.721;

// Función para calcular el peso
function calcularMasa(){

    // Obtener peso en la Tierra
    var pesoTierra = peso.value;

    // Hacer las operaciones
    var calPesoLuna = (pesoTierra/gTierra)*gLuna;
    var calPesoMarte = (pesoTierra/gTierra)*gMarte;

    // Quitar decimales
    var pesoLuna = Math.trunc(calPesoLuna);
    var pesoMarte = Math.trunc(calPesoMarte);

    // Cambiar valor de los <p>
    escriPesoLuna.innerHTML = (pesoLuna + " KG");
    escriPesoMarte.innerHTML = (pesoMarte + " KG");

}
