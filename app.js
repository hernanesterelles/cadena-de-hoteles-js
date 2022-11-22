



 //variables
let number
let costo
let tarjeta
 let carrito 

    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    else{
        carrito=[]
    }
    console.log('carrito:', carrito);
    // selectores
    const classcontainer = document.querySelector('#classcontainer') 
    
    
   
    
    //funciones
    const reservarHabitacionesAlCarrito = (e) => {
        const idhabitacionElegida = e.target.getAttribute('data-id');
        const habitacionCamaElegida = habitacionCama.find((habitacionCama) => habitacionCama.id == idhabitacionElegida)
        carrito.push(habitacionCamaElegida)
        console.log(carrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    const renderizarhabitacion =() =>{
        habitacionCama.forEach((habitacionCama) =>{
            const nuevaCard = document.createElement('div')
            nuevaCard.className = 'card'
            nuevaCard.innerHTML =  `    
                        <h3>Habitaciones</h3>
                        <p>
                        <img src="${habitacionCama.img}" alt="">
                        <p class="vistas">${habitacionCama.habitacion} con vista al jardin</p>
                        <p> precio por noche desde $ ${habitacionCama.precio}</p>
                        <p class="destino">Playa del carmen,MEXICO</p>
                        <buton class="buton" data-id= ${habitacionCama.id}>Reservar Habitacion</buton>
                        `
                        classcontainer.append(nuevaCard)        
            })
            const buton = document.querySelectorAll('.buton') 
            buton.forEach((button) =>{   
                addEventListener('click', reservarHabitacionesAlCarrito)
                     })
                    

    }
   
  
   

  //ejecuciones
 renderizarhabitacion()

 alert( 'Bienvenidos a nuestra cadena de hoteles')

 
 
 
 alert( 'elija una de nuestras habitaciones')
 
 
 let agregarHabitacion = prompt('elija una habitacion \n 0-simple $5000\n 1-doble $6000\n 2-triple $7500 \n 3-simple $15000\n 4-doble $16000\n 5-triple $17500')

 
 
 
 
 
 
   
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
         case '3':
            alert('Usted eligió una habitacion simple');
            habitacion = ('junior');
            number = prompt('¿Cuantos dias?');
            costo = habitacion1.precio * number;
            break;
        case '4':
            alert('Usted eligió una habitacion doble');
            habitacion = ('suite');
            number = prompt('¿Cuantos dias?');
            costo = habitacion2.precio * number;
            break;
        case '5':
            alert('Usted eligió una habitacion triple');
            habitacion = ('familiar');
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
     
 