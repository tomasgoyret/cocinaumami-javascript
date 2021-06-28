
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
    var nuevoAlumno = new Alumno(nombre,apellido,sexo,cel,mail);
    console.log(nuevoAlumno);
    //todavía tengo que agregar el caso en que falte agregar datos y no te permita enviar 
    //el formulario
    // submit formulario evento

    let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit",validarFormulario);

    function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado")
    var nombre = document.getElementById("inputNombre").value;
    var mail = document.getElementById("inputEmail").value;
    alert("Bienvenido "+nombre+", te enviamos la confirmación de inscripción a la casilla de correo :"+mail)
    miFormulario.reset();    
}

})




