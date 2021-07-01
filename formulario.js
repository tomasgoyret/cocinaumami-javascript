
//se creen objetos con los datos del alumno
class Alumno {
    constructor (nombre,apellido,sexo,cel,mail){
        this.nombre = nombre,
        this.apellido = apellido,
        this.sexo = sexo,
        this.cel = cel,
        this.mail = mail
    }
}

$("#botonConEstilo").click(function(){
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var sexo = document.getElementsByClassName("form-check-input").value;
    var cel = document.getElementById("inputCelular").value;
    var mail = document.getElementById("inputEmail").value;
    if(nombre==="" || apellido==="" || cel==="" || mail ===""){
        var respuestaValidacion = 'Para avanzar, por favor, llena todos los datos'
        document.getElementById("resultadoCantidad").innerHTML = respuestaValidacion
    } else {
        var confirmacion = 'Bienvenido ' + nombre+ ' te enviamos el mail de confirmacion a: '+mail
        document.getElementById("resultadoCantidad").innerHTML = confirmacion
        var nuevoAlumno = new Alumno(nombre,apellido,sexo,cel,mail);
        console.log(nuevoAlumno);
        let miFormulario = document.getElementById("formulario");
        miFormulario.reset();
    }
})

//variables que cree para armar el popup
var overlay = document.getElementById('overlay');
var popup = document.getElementById("popup");
var cerrarPopup = document.getElementById("cerrar");

//abrir pop up boton 'Empezar a cocinar'
document.getElementById("botonConEstilo").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})


//boton cerrar del pop up
cerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})




