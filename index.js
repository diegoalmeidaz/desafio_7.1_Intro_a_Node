const fs = require('fs')

const {registrar, leer} = require('./operaciones.js')

const argumentos = process.argv.slice(2);

const seleccion = argumentos[0]

if(seleccion === "registrar" & argumentos.length === 6) {
    
    registrar(argumentos [1], argumentos[2], argumentos[3], argumentos[4], argumentos[5])
    
    return

} else if(seleccion === "leer"){
    leer()
    return
} else {
    console.log("Ingrese el comando correcto: Registrar o Leer. Recuerde que para registrar una nueva entrada, tiene que poner los argumentos necesarios: 1) Nombre de la mascota, 2) Edad de la mascota; 3) Clasificacion de la mascota, 4) Sintomas de la mascota.")
}
