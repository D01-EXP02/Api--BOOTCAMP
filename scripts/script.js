const apibase = "http://127.0.0.1:8000"

class Estudiante{
    nombre
    identificacion
    sexo
    fecha_nacimiento
    fecha_ingreso
    notas

}

function registrar(){
    fetch(apibase + "/registrar",{
       method: 'POST',
       body: capturar(),
       headers: {
        'Content-Type': 'application/json'
       }
    })
    .then(Response => Response.json())
    .then(data => alert(data))
    .catch(error => console.log(error))
}

function capturar(){
    let estudiante = new Estudiante()

    estudiante.nombre = document.querySelector("#nombre").value
    estudiante.identificacion = document.querySelector("#identificacion").value
    estudiante.sexo = document.querySelector("#sexo").value
    estudiante.fecha_nacimiento = document.querySelector("#fecha_nacimiento").value
    estudiante.fecha_ingreso = document.querySelector("#fecha_ingreso").value
    estudiante.notas = document.querySelector("#notas").value.split(',')

    return JSON.stringify(estudiante)
}