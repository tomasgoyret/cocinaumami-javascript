
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


class Receta {
    constructor (nombre,ingrediente1,ingrediente2,ingrediente3,ingrediente4){
        this.nombre = nombre,
        this.ingrediente1 = ingrediente1,
        this.ingrediente2 = ingrediente2,
        this.ingrediente3 = ingrediente3,
        this.ingrediente4 = ingrediente4
    }
}

const cheescake = new Receta ('cheescake',['Harina',100,'gramos'],['Frutos Rojos',200,'gramos'],['Queso Crema',300,'gramos'],['Huevos',4,'unidades']);
const marquesaChoco = new Receta ('marquesa de chocolate',['chocolate',150,'gramos'],['galletitas de agua',1,'paquete'],['dulce de leche',150,'gramos'],['merenguitos',3,'unidades'])
const flan = new Receta ('flan',['Huevos',1,'unidad'],['leche',50,'mililitros'],['esencia de vainilla',1,'cucharadita'],['leche en polvo',1,'cuchara'])
const chipa = new Receta ('chipa',['Harina',100,'gramos'],['huevo',1,'unidad'],['queso',50,'gramos'],['manteca',50,'gramos'])
const pasta = new Receta ('pasta',['harina',300,'gramos'],['huevo',1,'unidad'],['espinaca',200,'gramos'],['queso rayado',50,'gramos'])
const risotto = new Receta ('risotto',['pollo',1,'pechuga'],['arroz',100,'gramos'],['hongos',5,'unidades'],['pimienta',5,'gramos'])
const reebs = new Receta ('reebs',['costilla de cerdo', 500,'gramos'],['papa',2,'unidades'],['lechuga',5,'hojas'],['salsa barbacoa', 1 ,'cucharada'])


document.getElementById("botonConEstilo").addEventListener('click',function(){
    var cantPers = document.getElementById('numeroPers').value
    if(cantPers<1){
        return console.log('Debe ingresar un numero mayor a cero')
    } else {
    let cantIngrediente1 = cantPers*cheescake.ingrediente1[1]
    let cantIngrediente2 = cantPers*cheescake.ingrediente2[1]
    let cantIngrediente3 = cantPers*cheescake.ingrediente3[1]
    let cantIngrediente4 = cantPers*cheescake.ingrediente4[1]
    console.log('Para cocinar '+cheescake.nombre+' para '+cantPers+' personas vas a necesitar '+cantIngrediente1+' '+cheescake.ingrediente1[2]+' de '+cheescake.ingrediente1[0]+
                ' ,'+ cantIngrediente2+' '+cheescake.ingrediente2[2]+' de '+cheescake.ingrediente2[0]+
                ' ,'+ cantIngrediente3+' '+cheescake.ingrediente3[2]+' de '+cheescake.ingrediente3[0]+
                ' y '+ cantIngrediente4+' '+cheescake.ingrediente4[2]+' de '+cheescake.ingrediente4[0]
                );
            }
})


// const tarjetas = document.querySelector(".tarjetas")
// let btn= document.createElement('button');
//     btn.textContent = "Calcular proporciones";
//     btn.className = 'botonTarjeta';
//     tarjetas.appendChild(btn);



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




