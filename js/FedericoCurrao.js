






// // - PROYECTO >> E-COMMERCE Y SISTEMA PARA EMPLEADOS  //////////////////////////////////////////////////////////


	 ///////////////////////////////
	 // 	  INSTANCIAS !!!
	 ///////////////////////////////


const suma = (a,b) =>  a + b;
const resta = (a,b) => a - b;
const iva = x => x*0.21;
let precioProducto , descuento = 1;
let nombreProducto = "";
let nuevoPrecio2=0;
let miTotal = 0;
let nroItemDado = 0;
let opcion1 = 0;
let opcion2 = 0;
let opcion3 = 0;
let i=0
let idNew2 = 0
let subtotal = 0
const idNew3=0

const nombreDado1 = ""
const precioDado1 = 0
const cantDado1 = 0
let cuadroPrincipal = document.getElementById('cuadroPrincipal')
let cuadroPrincipal4 = document.getElementById("cuadroPrincipal4")
let cuadroPrincipalArribaArriba = document.getElementById("cuadroPrincipalArribaArriba")
let cuadroPrincipal2 = document.getElementById('cuadroPrincipal2')
let cuadroPrincipal3 = document.getElementById("cuadroPrincipal3")
const btnCliente = document.getElementById('btnCliente');
const btnEmpleado = document.getElementById('btnEmpleado');
const btnAceptar = document.getElementById('btnAceptar')
const items = [
    {nombre: "ARROZ", precio: 130, nroItem: 1, cantidad:10},
    {nombre: "MAYONESA", precio: 230, nroItem: 2, cantidad:10},
	{nombre: "PAELLA", precio: 1588, nroItem: 3, cantidad:10},
	{nombre: "FIDEOS", precio: 130, nroItem: 4, cantidad:100},
	{nombre: "PAN", precio: 80, nroItem: 5, cantidad:50},
	{nombre: "GARBANZOS", precio: 658, nroItem: 6, cantidad:20},
	{nombre: "CHOCLO", precio: 333, nroItem: 7, cantidad:11},
	{nombre: "YERBA", precio: 800, nroItem: 8, cantidad:650}

    ]

const itemsCompraAhora = [
    {nombre: "", precio: 0, nroItem: 0, cantidad:0},
    ]

const micarroGuardado1 = []
const micarroGuardado2 = []
const listaNombres = []
const miCarrito = []






/////////////////////////////////////////////////////////////

class Producto {
    constructor(nombre, precio, nroItem, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
         this.nroItem = nroItem;
         this.cantidad = parseFloat(cantidad);
        this.vendido = false;
        	this.subtotal = subtotal;
    }

    sumaIva(){
    this.precio = this.precio * 1.21;
    }
}



class Producto2 {
    constructor(nombre, precio, nroItem, cantidad){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.nroItem = nroItem;
        this.cantidad = cantidad;
        this.vendido = false;
         	this.subtotal = subtotal;
    }

}




	 ///////////////////////////////
	 // 	  FUNCIONES !!!
	 ///////////////////////////////


function mostrarArrayItems(items,cuadro){
	 			cuadro.innerHTML = " "
    		for (const item of items) {
				cuadro.innerHTML += `<br><br> nombre: ${item.nombre} 
				<br> precio:  ${item.precio} <br> cantidad: ${item.cantidad}
				 <br> Nro Item:  ${item.nroItem} 

				`
    		} 
}
    		

function chekearCocinaOBanoOesCero(codigo) {
 
 	if(codigo == 0){
 	
	alert("Gracias por utilizar el sistema!  ADIOS! ");
	console.log("Gracias por utilizar el sistema! ADIOS! ");
 	} else {
	if(codigo != 1 && codigo != 2){
		alert("EL CODIGO QUE INGRESASTE ES INCORRECTO");
		console.log("EL CODIGO QUE INGRESASTE ES INCORRECTO");
	} 
		else {

	let nombreProducto = prompt("Ingresar el nombre del producto: ");
	let precioProducto = parseInt(prompt("Ingresar el precio del producto: "));
	let descuento = parseInt(prompt("Ingresar el descuento en efectivo: "));

	let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
	nuevoPrecio2 = nuevoPrecio;
	nroItem = items.length+1;
	alert("Gracias por utilizar el sistema! ");
	alert("El nuevo precio final (con iva y el descuento) de " + nombreProducto + " es: " + nuevoPrecio);

	items.push(new Producto( nombreProducto,nuevoPrecio, nroItem))



	}
	}

}
	

function 	mostrarAlgoxAmbos(parametroAMostrar){
	console.log(parametroAMostrar)
	alert(parametroAMostrar)
}

function limpiarCampos(){
	cuadroPrincipal2.innerHTML = ""
	cuadroPrincipal3.innerHTML = "" 
	cuadroPrincipal4.innerHTML = ""
	cuadroPrincipal5.innerHTML = ""
		cuadroPrincipal6.innerHTML = ""
cuadroPrincipalArribaArriba.innerHTML = "" 

}

function vaciarArray(arrayAVaciar){
			
			for (let i = arrayAVaciar.length; i > 0; i--) {
			arrayAVaciar.pop();
			} 
}

function guardarLocal (clave, valor)  {
				localStorage.setItem(clave, valor)
				}

function guardarSession (clave, valor)  {
				sessionStorage.setItem(clave, valor)
				}
    

	 ///////////////////////////////
	 // 	  INICIO DEL PROGRAMA !!!
	 ///////////////////////////////


    // EXCELENTE PARA MI PAGINA

Swal.fire({
    position: 'top',
    icon: 'success',
    title: "Bienvenidos al sistema de CALCULOS DE PRECIOS FINALES! " + "\n " + "(use MAYUSCULAS) ",
    showConfirmButton: false,
    timer: 2000,
})

();


    localStorage.clear()
    sessionStorage.clear()



   



	 ///////////////////////////////
	 // 	  CLIENTE !!!
	 ///////////////////////////////


btnCliente.addEventListener("click", () => { 
 	limpiarCampos()




	cuadroPrincipal3.innerHTML = ` <br> Elija la opcion que desea <br>  `

	cuadroPrincipal3.innerHTML = `	 <br><button class="btn btn-warning btn-custom m-1"  id="btnProductos">VER PRODUCTOS</button><br>
	<button class="btn btn-warning btn-custom m-1"  id="btnVerCarrito">VER CARRITO</button><br>
									<button class="btn btn-warning btn-custom m-1"  id="btnSalir">SALIR | VOLVER </button><br>`

	const btnProductos = document.getElementById('btnProductos'); 
	const btnVerCarrito = document.getElementById('btnVerCarrito')
	const btnSalir = document.getElementById('btnSalir')


	var i=0
	document.body.appendChild(cuadroPrincipal2)


/////////////////////////////////////////// BOTON SALIR
	btnSalir.addEventListener("click", () => {
			console.log("SALIR")
			cuadroPrincipal2.innerHTML = ""
			cuadroPrincipal3.innerHTML = ""
			cuadroPrincipal5.innerHTML = ""
	})






////////////////////////////////////////// BOTON PRODUCTOS 
	btnProductos.addEventListener("click", () => {



	document.body.appendChild(cuadroPrincipal3)
		cuadroPrincipal5.innerHTML = ""
		cuadroPrincipal2.innerHTML = ""
		cuadroPrincipal4.innerHTML = ""					
		cuadroPrincipal6.innerHTML = ""
		

		cuadroPrincipal2.innerHTML +=	`<H3> LISTA DE PRODUCTOS A COMPRAR: <br>  </H3>`
	for (item of items) {
		
		cuadroPrincipal2.innerHTML +=  `  ${item.nombre}  || Stock: ${item.cantidad} ||   ${item.precio} $   <br>`

	}
		
		cuadroPrincipalArribaArriba.innerHTML = `<br> QUE QUIERES COMPRAR: <input type="text" id="textoAcomprar"> :
												<br> CUANTAS UNIDADES : <input type="number" value="0" id="numeroAComprar"> 
												<br> <br><button class="btn btn-warning btn-custom m-1"  id="btnAgregarAlCarro">AGREGARLO AL CARRO</button><br> `

		document.body.appendChild(cuadroPrincipalArribaArriba)



	

	///////////////////////////////////////// BOTON AGREGAR AL CARRO ( )
			
		
			const btnAgregarAlCarro = document.getElementById('btnAgregarAlCarro')
			 btnAgregarAlCarro.addEventListener("click", () => {
			cuadroPrincipal5.innerHTML = ""
			document.body.appendChild(cuadroPrincipal5)

					document.body.appendChild(cuadroPrincipal3)	
				

				
				 

			
			
 		 	const textoAcomprar = document.getElementById('textoAcomprar').value 
			const numeroAComprar = document.getElementById('numeroAComprar').value 


		
        const buscado = items.find(producto => producto.nombre === textoAcomprar)
    				console.log(buscado)

   		if (buscado == undefined){
			alert("No existe este producto")
			
		} if (numeroAComprar < buscado.cantidad) {
			 alert("AGREGANDO........" + textoAcomprar)
			alert("AGREGADO!! Gracias.")
			miCarrito.push(new Producto(buscado.nombre,buscado.precio*numeroAComprar,buscado.nroItem, numeroAComprar, buscado.subtotal))
 
			buscado.cantidad = buscado.cantidad - numeroAComprar 


			const idNew = i+1
			guardarLocal(idNew, JSON.stringify(miCarrito[i]))
			i++	

			
			 
				console.log(idNew)
				console.log(buscado)

			



			 	cuadroPrincipal2.innerHTML = ""
							

		cuadroPrincipal2.innerHTML +=	`<H3> LISTA DE PRODUCTOS A COMPRAR: <br>  </H3>`
	for (item of items) {
		
		cuadroPrincipal2.innerHTML +=  `  ${item.nombre}  || Stock: ${item.cantidad} ||   ${item.precio} $   <br>`

	}

			document.body.appendChild(cuadroPrincipalArribaArriba)

	/////////////////////////////////////////////////////////////////////////////

			 document.getElementById('textoAcomprar').value = ""
			  document.getElementById('numeroAComprar').value = ""

			} else {
				alert("No hay tanto stock")
			}





			console.log(textoAcomprar)
	
			console.log(numeroAComprar)


		 		})

	})




//////////////////////////////////////// BOTON VER CARRITO!

	btnVerCarrito.addEventListener("click", () => {
		console.log("CARRO")
							document.body.appendChild(cuadroPrincipal2)

					document.body.appendChild(cuadroPrincipal5)


		cuadroPrincipalArribaArriba.innerHTML = `` 
		var subtotal = 0
		cuadroPrincipal2.innerHTML = `Tu Carrito Hasta Ahora es : `

			
				

		for(micarro of miCarrito){

			 subtotal += micarro.precio
			 console.log("MUESTRO CARRITO")
			 console.log(micarro.nombre)
			 console.log(micarro.precio)
			 console.log(micarro.cantidad)


			 	 cuadroPrincipal2.innerHTML +=  ` <br> ${micarro.cantidad}  unidades de  ${micarro.nombre}  || ${micarro.precio} <br>`
			 	
			}
		
			 cuadroPrincipal2.innerHTML +=  `<br> TU TOTAL ES: ${subtotal} <br>` 



			  cuadroPrincipal5.innerHTML =  `<button class="btn btn-warning btn-custom m-1 inicioE"  id="btnComprar">COMPRAR!</button>
			  			<br> <button class="btn btn-warning btn-custom m-1 inicioE"  id="btnLimpiarCarrito">LIMPIAR CARRITO</button>
				<br><br><br> <button class="btn btn-warning btn-custom m-1 inicioE"  id="btnGuardarCarrito">GUARDAR CARRITO || ESCRIBA EL NOMBRE PRIMERO </button>
			<input type=text name"contra" id="nombreChango">

					<br><br><br> <button class="btn btn-warning btn-custom m-1 inicioE"  id="btnRecuperarCarrito">RECUPERAR CARRITO</button>
					<input type=text name"contra" id="recuperoChango">

				` 
		
			
//////////////////// BOTON COMPRAR


	const btnComprar = document.getElementById(`btnComprar`)


			btnComprar.addEventListener("click", () => {

				alert("Comprando.......")
				alert("COMPRADO ! , Gracias por elegirnos.")
				console.log("Compro un carrito")
				 subtotal = 0

				localStorage.clear()
				vaciarArray(miCarrito)
				cuadroPrincipal4.innerHTML = ""
				 cuadroPrincipal6.innerHTML = ""
				cuadroPrincipal2.innerHTML = `Tu Carrito Hasta Ahora es : `
		
			 cuadroPrincipal2.innerHTML +=  `<br> TU TOTAL ES: ${subtotal} <br>` 
			})



	//////////////////// BOTON limpiar		
			const btnLimpiarCarrito = document.getElementById(`btnLimpiarCarrito`)


			btnLimpiarCarrito.addEventListener("click", () => {

				
				 subtotal = 0

				localStorage.clear()
				vaciarArray(miCarrito)
					cuadroPrincipal4.innerHTML = ""
				 cuadroPrincipal6.innerHTML = ""
			cuadroPrincipal2.innerHTML = `Tu Carrito Hasta Ahora es : `
		
			 cuadroPrincipal2.innerHTML +=  `<br> TU TOTAL ES: ${subtotal} <br>` 
			})





////////////////////// BOTON GUARDAR CARRITO ///////////

			const btnGuardarCarrito = document.getElementById(`btnGuardarCarrito`)

			

			var subto = subtotal
			btnGuardarCarrito.addEventListener("click", () => {


				
				 
				localStorage.clear()
				
				cuadroPrincipal2.innerHTML = ""
				
				 
				
				const nombreChango = document.getElementById(`nombreChango`).value
				document.getElementById(`nombreChango`).value=""
				console.log(nombreChango)
				dNew2 = idNew2+1
				guardarSession(nombreChango,JSON.stringify(miCarrito))
				
				 cuadroPrincipal4.innerHTML += `<H3 style="color: red;">CHANGOS GUARDADOS: ${nombreChango} </H3>`

				 	subtotal = 0
				 for (i=0 ; i<miCarrito.length; i++) {
				 
				 
				 micarroGuardado1.push(new Producto(miCarrito[i].nombre,miCarrito[i].precio,miCarrito[i].nroItem, miCarrito[i].cantidad, miCarrito[i].subtotal))
				
				 subtotal = subtotal + miCarrito[i].precio		


				}  
					console.log(micarroGuardado1)
					let sumatoriaTotal = 0
					for (carro of micarroGuardado1){
						 sumatoriaTotal = sumatoriaTotal + micarro.subtotal
						console.log(micarro.subtotal)
						console.log(sumatoriaTotal)

					}
					console.log(sumatoriaTotal)

				cuadroPrincipal4.innerHTML += `  || SUBTOTAL:  ${subtotal} $ <BR>`
				
				console.log(sumatoriaTotal)

				 vaciarArray(miCarrito)
				 console.log(micarroGuardado1)
				 				 console.log(miCarrito)
				 				 subtotal = 0

				localStorage.clear()
				vaciarArray(miCarrito)

			cuadroPrincipal2.innerHTML = `Tu Carrito Hasta Ahora es : `
		
			 cuadroPrincipal2.innerHTML +=  `<br> TU TOTAL ES: ${subtotal} <br>`

			})


////////////////  PASAR ESTO A ECOMERCE.... ===========================

			const btnRecuperarCarrito = document.getElementById(`btnRecuperarCarrito`)
			
			btnRecuperarCarrito.addEventListener("click", () => {


				const recuperoChango = document.getElementById(`recuperoChango`).value
				document.getElementById(`recuperoChango`).value=""

				


				const buscanding = JSON.stringify(Object.keys(sessionStorage))

				const buscanding2 = Object.keys(sessionStorage)

				console.log(buscanding)
				console.log(buscanding2)
					const recuperadoYa = JSON.parse(sessionStorage.getItem(recuperoChango))
				if(recuperadoYa != null){

				console.log("ENCONTRO UN ChANGO")
				
				const recuperadoYa = JSON.parse(sessionStorage.getItem(recuperoChango))

				console.log(recuperadoYa)


				cuadroPrincipal6.innerHTML = ` <H2 style="color: blue;"> CHANGOS RECUPERADO: ${recuperoChango} </H2>`
								const buscanding2 = Object.keys(sessionStorage)


				const hhhh = JSON.stringify(sessionStorage.getItem(recuperadoYa))
					localStorage.setItem(`R${idNew3}`, hhhh)
				idNew3+1
				vaciarArray(miCarrito)

				subto = 0
				cuadroPrincipal2.innerHTML = `Tu Carrito Hasta Ahora es : ${recuperoChango}  `
				for ( i=0; i<recuperadoYa.length; i++ ){
						 miCarrito.push(new Producto(recuperadoYa[i].nombre,recuperadoYa[i].precio,recuperadoYa[i].nroItem, recuperadoYa[i].cantidad))
				subto = subto + miCarrito[i].precio	
		
				cuadroPrincipal2.innerHTML += `<BR> ${recuperadoYa[i].nombre} || ${recuperadoYa[i].precio} $ || ${recuperadoYa[i].cantidad} UNIDADES.. || `
				

				}

					
		
			 cuadroPrincipal2.innerHTML +=  `<br> TU TOTAL ES: ${subto} <br>`
				

		




				} else {alert("el nombre del chango es incorrecto")}
					console.log(miCarrito)
					console.log(recuperoChango)
						console.log(buscanding)
							console.log(buscanding2)




				 subtotal = 0

				

		
			})



		
	})
	

	// cierra boton clientes
})
	

	 ///////////////////////////////
	 ///////////////////////////////
	 ///////////////////////////////
	 // 	  EMPLEADOS !!!
	 ///////////////////////////////
	 ///////////////////////////////
	 ///////////////////////////////

	 btnEmpleado.addEventListener("click", () => { 
		 limpiarCampos()
	 	cuadroPrincipal2.innerHTML = `Ponga su contraseña aqui (1234): . <input type="password" name"contra" id="contrasena"> 
				`

	cuadroPrincipal2.innerHTML += `	<button class="btn btn-warning btn-custom m-1 inicioE"  id="btnAceptar">ACEPTAR</button>`
	 		

	 	document.body.appendChild(cuadroPrincipal2)



// 	  EMPLEADOS !!!

	
	const btnAceptar = document.getElementById('btnAceptar')


	btnAceptar.addEventListener("click", () => {  


		const contrasena = document.getElementById('contrasena').value;
if (contrasena == 1234) {

		
	

	

	
	 	cuadroPrincipal2.innerHTML = `Elija la opcion deseada `

		document.body.appendChild(cuadroPrincipal2)



	 	cuadroPrincipal2.innerHTML += `  <br><button class="btn btn-warning btn-custom m-1"  id="btnAgregarE">AGREGAR PRODUCTO NUEVO</button><br>  `
		cuadroPrincipal2.innerHTML += `	<button class="btn btn-warning btn-custom m-1"  id="btnModificarStockE">CAMBIAR STOCK</button><br>`
		cuadroPrincipal2.innerHTML += `	<button class="btn btn-warning btn-custom m-1"  id="btnAumentoE">SUBIR PRECIO</button><br>`
		cuadroPrincipal2.innerHTML += `	<button class="btn btn-warning btn-custom m-1"  id="btnVerListaE">VER LISTA</button><br>`
		cuadroPrincipal2.innerHTML += `	<button class="btn btn-warning btn-custom m-1"  id="btnSalirE1">SALIR | VOLVER </button><br>`


		const btnAgregarE = document.getElementById('btnAgregarE');
		const btnModificarStockE = document.getElementById('btnModificarStockE')
		const btnAumentoE = document.getElementById('btnAumentoE')
		const btnVerListaE = document.getElementById('btnVerListaE')
		const btnSalirE1 = document.getElementById('btnSalirE1')




/// BTN AGREGAR
		btnAgregarE.addEventListener("click", () => {  

		console.log("agregar")
	 	cuadroPrincipalArribaArriba.innerHTML = `<br>NOMBRE A AGREGAR <br> . <input type="text" id="nombreDado">
	 	<br><br>PRECIO A AGREGAR <br> . <input type="number" id="precioDado">
	 	<br><br>CANTIDAD A AGREGAR <br> . <input type="number" id="cantDado">

	 	`
		cuadroPrincipalArribaArriba.innerHTML += `<br><button class="btn btn-warning btn-custom m-1"  id="btnAceptar1">Aceptar</button><br> `
		cuadroPrincipalArribaArriba.innerHTML += `<br><button class="btn btn-warning btn-custom m-1"  id="btnVolver1">Volver</button><br> `
			document.body.appendChild(cuadroPrincipalArribaArriba)
			document.body.appendChild(cuadroPrincipal4)
		


	//  BOTON ACEPTAR
		cuadroPrincipalArribaArriba.addEventListener("click", (e) => {
 		 let eventoTarget = e.target;
 		 if (eventoTarget.id == "btnAceptar1"){
 		 	document.body.appendChild(cuadroPrincipal3)

 		 


		const nombreDado1 = document.getElementById('nombreDado').value
		const precioDado1 = document.getElementById('precioDado').value
		const cantDado1 = document.getElementById('cantDado').value


		document.getElementById('nombreDado').value = " " 
		document.getElementById('precioDado').value = " " 
		document.getElementById('cantDado').value = " " 


		const listaNombres = items.map(producto => " <br>  nombre: " + producto.nombre  + " || precio: " + producto.precio + "$  ||  item: " + producto.nroItem + " ||  cantidad: " + producto.cantidad )


        const buscado = items.find(producto => producto.nombre === nombreDado1)


        // BUSCADO ES UNDEFINED ( PORQUE ES PC)
        // BUSCADO ES PAN (PORQUE EXISTE )

		if (buscado == undefined){
		if (precioDado1 > 0 || precioDado1 == 'null') {
		if (cantDado1 > 0 || cantDado == 'null') {
		

		alert(`EL PRODUCTO ${nombreDado1}  FUE AGREGADO!`)
		const nroItemDado1 = items.length+1
		items.push(new Producto(nombreDado1, precioDado1, nroItemDado1, cantDado1));
		mostrarArrayItems(items,cuadroPrincipal3)
		cuadroPrincipal4.innerHTML = `<br> <h3>Ultimo en agregar : ${nombreDado1} </h3><br>`
			

		} else { alert("Ingresa cantidad")}
		} else { alert("Ingresa precio")}
		} else {alert(`EL PRODUCTO ${nombreDado1}  YA EXISTE!`)}


        console.log(nombreDado1)
        console.log(precioDado1)
        console.log(cantDado1)
	

		
	

 		 } if (eventoTarget.id == "btnVolver1"){

 		 // volver
	 	cuadroPrincipalArribaArriba.innerHTML = `    `
		cuadroPrincipal3.innerHTML = `    `
		cuadroPrincipal4.innerHTML = `    `

 		 }
 		 else {}

 	 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO AGREGADO DE PRODUCTOS !!!
		 ///////////////////////////////
	 ///////////////////////////////
 		 })

	 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL BOTON btnAgregarE !!!
	 ///////////////////////////////
	 ///////////////////////////////

		})



//  BOTON MODIFICAR STOCK
		btnModificarStockE.addEventListener("click", () => {  


		cuadroPrincipal3.innerHTML = ""
		cuadroPrincipal4.innerHTML = ""

		console.log("modificar stock")
		const listaNombres = items.map(producto => " <br>  nombre: " + producto.nombre  + " || precio: " + producto.precio + "$  ||  item: " + producto.nroItem + " ||  cantidad: " + producto.cantidad )

		cuadroPrincipalArribaArriba.innerHTML = `<br><br>QUE PRODUCTO QUERES MODIFICAR EL EL STOCK  ? <br> ponga 
		solo el nombre en mayusculas  <br>
		<br>  <input type="text" id="productoAModificarStockE">  </input>
		<br><button class="btn btn-warning btn-custom m-1"  id="btnAceptar">Aceptar</button><br> 
		<br>


		`

		cuadroPrincipalArribaArriba.innerHTML += `<br> ${listaNombres}`
			document.body.appendChild(cuadroPrincipalArribaArriba)
		

		
/////////////////  BOTON! 
		const btnAceptar = document.getElementById('btnAceptar')
		btnAceptar.addEventListener("click", () => { 
		


		const prodcutoARetirar = document.getElementById("productoAModificarStockE").value
		const buscado = items.find(producto => producto.nombre === prodcutoARetirar)

		if(buscado == undefined){
		alert("no existe este producto ( ACORDATE DE LAS MAYUSCULAS)")
		} else {

		cuadroPrincipalArribaArriba.innerHTML = ` <br> <br> Producto:  ${buscado.nombre}  | PRECIO: ${buscado.precio}  | ITEM:  ${buscado.nroItem}  | CANT: ${buscado.cantidad} <br> <br>
		Ingrese la cantidad INGRESANTE: 
		<input type="number" id="productoAModificarStockE">  </input>
		<br><button class="btn btn-warning btn-custom m-1"  id="btnAceptar">Aceptar</button><br> 

		`
		}


/////////////////  BOTON! 
		const btnAceptar = document.getElementById("btnAceptar")
		btnAceptar.addEventListener("click", () => { 
		
		const cantidadAAgregar = parseInt(document.getElementById("productoAModificarStockE").value)

		buscado.cantidad = parseInt(buscado.cantidad)+parseInt(cantidadAAgregar);
		cuadroPrincipalArribaArriba.innerHTML = ` <br> QUEDA: <br> Producto:  ${buscado.nombre} + | PRECIO: ${buscado.precio}  | ITEM:  ${buscado.nroItem}  | CANT: ${buscado.cantidad} <br> `
		})

		})

			 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO btnModificarStockE !!!
		 ///////////////////////////////
	 ///////////////////////////////
		})


					document.body.appendChild(cuadroPrincipalArribaArriba)


// BOTON MODIFICANDOPRECIO AUMENTO

		btnAumentoE.addEventListener("click", () => {  


		cuadroPrincipal3.innerHTML = ""
		cuadroPrincipal4.innerHTML = ""
			console.log("MODIFICANDO EL PRECIO")
		const listaNombres = items.map(producto => " <br>  nombre: " + producto.nombre  + " || precio: " + producto.precio + "$  ||  item: " + producto.nroItem + " ||  cantidad: " + producto.cantidad )

		cuadroPrincipalArribaArriba.innerHTML = ` <br><br>QUE PRODUCTO QUERES MODIFICAR EL PRECIO  ? <br> ponga  el nombre en mayusculas <br>
		<br>  <input type="text" id="inpAumentoE1">  </input>
		<br> PRECIO ACTUAL  ? : 
		<br> <input type="text" id="inpAumentoE2">  </input>
		<br><button class="btn btn-warning btn-custom m-1"  id="btnAceptar">Aceptar</button><br> 
		<br>
		<br> ${listaNombres} `



/////////////////  BOTON! 

		const btnAceptar = document.getElementById("btnAceptar")
		btnAceptar.addEventListener("click", () => { 


		const productoInflado = (document.getElementById("inpAumentoE1").value)


		const inflado = items.find(producto => producto.nombre === productoInflado)
		if(inflado == undefined){
		alert("no existe este producto ( ACORDATE DE LAS MAYUSCULAS)")
		} else {

		const precioActualizado = parseInt(document.getElementById("inpAumentoE2").value)

		inflado.precio = precioActualizado

		cuadroPrincipalArribaArriba.innerHTML = ` <br> QUEDA: <br> Producto:  ${inflado.nombre} + | PRECIO: ${inflado.precio}  | ITEM:  ${inflado.nroItem}  | CANT: ${inflado.cantidad} <br> `
		}

	})




			 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO btnAumentoE !!!
		 ///////////////////////////////
	 ///////////////////////////////
		})

	
// BOTON VER LISTA
		btnVerListaE.addEventListener("click", () => {  



		cuadroPrincipal3.innerHTML = ""
		cuadroPrincipal4.innerHTML = ""
			console.log("Viendo lista")
		const listaNombres = items.map(producto => " <br>  nombre: " + producto.nombre  + " || precio: " + producto.precio + "$  ||  item: " + producto.nroItem + " ||  cantidad: " + producto.cantidad )

 		 	cuadroPrincipalArribaArriba.innerHTML = `<br> ${listaNombres}`

			document.body.appendChild(cuadroPrincipalArribaArriba)


			 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO btnVerListaE !!!
		 ///////////////////////////////
	 ///////////////////////////////
		})


// BOTON SALIDA

		btnSalirE1.addEventListener("click", () => {  

	console.log("saliendo")	

		cuadroPrincipal3.innerHTML = ""
		cuadroPrincipal4.innerHTML = ""
		

				cuadroPrincipal2.innerHTML = ""
			cuadroPrincipalArribaArriba.innerHTML = ""

			document.body.appendChild(cuadroPrincipalArribaArriba)


			 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO btnSalirE1 !!!
		 ///////////////////////////////
	 ///////////////////////////////
		})


	
		
 
} else {
// si pone mal la contraseña (cierre de If)
alert("su contraseña es incorrecta, intente nuevamente")
}
	 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL BOTON btnAceptar !!!
		 ///////////////////////////////
	 ///////////////////////////////
})
	 ///////////////////////////////
	 ///////////////////////////////
	// 	  TERMINA EL EVENTO btnEmpleado!!!
		 ///////////////////////////////
	 ///////////////////////////////
})










// // - FINAL DEL PROYECTO >>



		


