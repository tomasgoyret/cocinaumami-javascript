//crear un boton de "calcular proporciones para receta" abajo de cada receta, no anda

var abrirPopup = document.getElementById('botonConEstilo');
var overlay = document.getElementById('overlay');
var popup = document.getElementById("popup");
var cerrarPopup = document.getElementById("cerrar");


var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button id='botonCheescake' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("cheescake").appendChild(miRecetario);

document.getElementById("botonCheescake").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})


var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button id='botonMarquesa' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("marquesa").appendChild(miRecetario);


document.getElementById("botonMarquesa").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})


var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button id='botonFlan' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("flan").appendChild(miRecetario);

document.getElementById("botonFlan").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button id='botonChipa' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("chipa").appendChild(miRecetario);

document.getElementById("botonChipa").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button type='submit' id='botonPasta' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("pasta").appendChild(miRecetario);

document.getElementById("botonPasta").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button type='submit' id='botonRisotto' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("risotto").appendChild(miRecetario);

document.getElementById("botonRisotto").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button type='submit' id='botonLasagna' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("lasagna").appendChild(miRecetario);

document.getElementById("botonLasagna").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<button type='submit' id='botonReebs' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("reebs").appendChild(miRecetario);

document.getElementById("botonReebs").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

cerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})
//AYAX con Jquery -- 
// me sale el siguiente error:
//recetas.html:1 Access to XMLHttpRequest at 'file:///C:/recetas.json' from origin 'null' has been blocked by CORS policy:
//Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
//jquery-3.6.0.js:10109 GET file:///C:/recetas.json net::ERR_FAILED
//const URLJSON = "/recetas.json";

//$("#botonConEstilo").click(()=>{
//    $.getJSON(URLJSON,function(respuesta,estado){
//        if (estado==="success"){
//            let misDatos = respuesta;
//            for(const dato of misDatos){
//                alert("Vas a necesitar "+$(dato.Ingredientes))
//            }
//        }
//    })
//})




