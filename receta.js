//variables que cree para armar el popup
var overlay = document.getElementById('overlay');
var popup = document.getElementById("popup");
var cerrarPopup = document.getElementById("cerrar");

//creacion del div de 'calcular proporciones'
var miRecetario = document.createElement("div");
miRecetario.innerHTML = "<h3> Calcula la cantidad de ingredientes que necesitas </h3>  <form class='cantidadPersonas'>Elegi la receta que queres cocinar: <select id='opcionesRecetas'><option value='cheescake' >cheescake</option><option value='marquesa de chocolate'>marquesa de chocolate</option><option value='flan'>flan</option><option value='chipa'>chipa</option><option value='pasta'>pasta</option><option value='risotto'>risotto</option><option value='lasagna'>lasagna</option><option value='reebs'>reebs</option></select><br><br>Cocinar para <input class='numeroPers' id='numeroPers' type='number' min='1'> personas.</form> <button id='botonProporciones' class='btn btn-primary'>Calcular proporciones</button>"
document.getElementById("fraseYboton").appendChild(miRecetario);
miRecetario.classList.add('botonProporciones')

//abrir pop up boton 'calcular proporciones'
document.getElementById("botonProporciones").addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})


//boton cerrar del pop up
cerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
})

//objetos con los ingredientes de las recetas, que voy a necesitar para el calculo de las recetas
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
const lasagna = new Receta ('lasagna',['tapas de lasagna',5,'unidades'],['carne molida',100,'gramos'],['ricota',100,'gramos'])
const reebs = new Receta ('reebs',['costilla de cerdo', 500,'gramos'],['papa',2,'unidades'],['lechuga',5,'hojas'],['salsa barbacoa', 1 ,'cucharada'])

var recetario = [cheescake,marquesaChoco,flan,chipa,pasta,risotto,lasagna,reebs]
var cantPers = document.getElementById('numeroPers').value

//funcion ejemplo para el calculo de la receta de cheescake

 document.getElementById("botonProporciones").addEventListener('click',function(){
     if( document.getElementById('numeroPers').value < 1) {
        document.getElementById("resultadoCantidad").innerHTML = 'El numero de cantidad de personas debe ser mayor a cero.'
     }else{
         for(var i = 0 ; i<recetario.length;  i++){
            if(recetario[i].nombre===document.getElementById("opcionesRecetas").value){
            var resultado =  ('Para cocinar '+recetario[i].nombre+' para '+document.getElementById('numeroPers').value+ ' personas necesitas: '+ recetario[i].ingrediente1[1]*document.getElementById('numeroPers').value+ ' '+recetario[i].ingrediente1[2]+' de '+recetario[i].ingrediente1[0]+ ' , '+recetario[i].ingrediente2[1]*document.getElementById('numeroPers').value+ ' '+recetario[i].ingrediente2[2]+' de '+recetario[i].ingrediente2[0] +' y '+recetario[i].ingrediente3[1]*document.getElementById('numeroPers').value+ ' '+recetario[i].ingrediente3[2]+' de '+recetario[i].ingrediente3[0] )  
        }
     }
     document.getElementById("resultadoCantidad").innerHTML = resultado
    }
 })