alert( 'Bienvenidos a nuestra cadena de hoteles')

let costo
let tarjeta
class habitaciones{
    constructor(id,habitacion,precio){
        this.id=id;
        this.habitacion=habitacion;
        this.precio=precio;
    }
}
const habitacion1=new habitaciones(001,'simple',5000)
const habitacion2=new habitaciones(002,'doble',6000)
const habitacion3=new habitaciones(003,'triple',7500)
alert( 'elija una de nuestras habitaciones')

const habitacionCama=[habitacion1,habitacion2,habitacion3]
habitacionCama.forEach((cama)=>{
    console.log(cama)
})
let carrito =[];
carrito.push(habitacionCama)
let agregarHabitacion = prompt('elija una habitacion \n 0-simple $5000\n 1-doble $6000\n 2-triple $7500')
function comprarUsuario(habitacionElegida){
    carrito.push(habitacionCama[habitacionElegida])
}
comprarUsuario(agregarHabitacion);






  
switch (agregarHabitacion) {
    
    case '0':
        alert('Usted eligió una habitacion simple');
        habitacion = ('simple');
        number = prompt('¿Cuantos dias?');
        costo = habitacion1.precio * number;
        break;
    case '1':
        alert('Usted eligió una habitacion doble');
        habitacion = ('doble');
        number = prompt('¿Cuantos dias?');
        costo = habitacion2.precio * number;
        break;
    case '2':
        alert('Usted eligió una habitacion triple');
        habitacion = ('triple');
        number = prompt('¿Cuantos dias?');
        costo = habitacion3.precio * number;
        break;
    
    default:
        alert('Usted ha ingresado un valor incorrecto');
        
        break;
}while (agregarHabitacion == false || agregarHabitacion>5 || agregarHabitacion<1);
 {
    alert(' usted se quedaria  '+ number +' dias '+ 'en una habitacion ' + habitacion + ' con un costo de $' + costo + ' Pesos') }

let datosTarjeta=0
let valorCuota=0
let cuotas=0

alert("total de la compra: $"+(costo))
let pago= prompt("con que metodo desea pagar? tarjeta o transferencia")
if(pago=="tarjeta"){
    let debOcred=prompt("debito o credito?")
    if(debOcred== "credito"){
         cuotas = Number(prompt("cuantas cuotas? 3, 6 o 12"))
        if(cuotas==3) {

         valorCuota= costo/cuotas
         alert("3 cuotas de: $"+ valorCuota)
       
        }else if(cuotas==6){
                 valorCuota= costo/cuotas
         alert("6 cuotas de: $"+ valorCuota)
        
        }else if(cuotas ==12){
                 valorCuota= costo/cuotas
         alert("12 cuotas de: $"+ valorCuota)
         alert('Gracias por su compra')

        
        }else{
            alert("opcion invalida")
        }
    }else if(debOcred=="debito"){
         datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
         if(datosTarjeta>=100000000000 && datosTarjeta<=999999999999){
            alert("tarjeta aprobada")
            alert('Gracias por su compra')

         }else{
            alert("tarjeta invalida")
         }
    }else {
        alert("opcion invalida")
    }
}else if(pago=="transferencia"){
    alert("transferir al cbu 878775656455334")
    console.log("trasnferir al cbu 878775656455334")
    alert('Gracias por su compra')

    }else{
        alert("opcion incorrecta")

    }
    

