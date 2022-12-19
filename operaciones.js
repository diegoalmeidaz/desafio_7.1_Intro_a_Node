const fs = require('fs')

const registrar = (nombre, edad, clasificacion, color, sintomas) => {
    const archivo = fs.readFileSync(`citas.json`, 'utf8');
    const data =  JSON.parse(archivo)

    const infopet = {
        nombre,
        edad,
        clasificacion,
        color,
        sintomas
    };

    fs.writeFileSync(`citas.json`, JSON.stringify([...data, infopet]))

    console.log("Su registro se ha ingresado con exito")

}

const leer = () => {
    const archivo = JSON.parse(fs.readFileSync(`citas.json`, 'utf8'));
    console.log(archivo);
}

module.exports = {registrar, leer}