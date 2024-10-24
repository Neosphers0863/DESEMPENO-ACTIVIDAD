// Almacen //

var producto
var cantidad
var precio

var productoCliente
var cantidadCliente

var repetir = true
var Ingresando = true

var repetirInventario = true

function ingresarProductoInventario() {
    while (Ingresando) {
        producto = prompt("Estos son los productos en mi inventario, escribe 'Salir' para acabar.")
        if (producto === 'Salir') {
            Ingresando = false
            break
        }

        cantidad = Number(prompt("Disponibles: "))
        precio = Number(prompt("Precio: "))

        agregarProductos(producto, cantidad, precio)
    }
}

ingresarProductoInventario()

function agregarProductos(producto, cantidad, precio) {
    console.log("Inventario: ")
    console.log("Producto: ", producto)
    console.log("Cantidad: ", cantidad)
    console.log("Precio: ", precio)
}

while (repetir) {
    var opcion = Number(prompt("Bienvenido que desea comprar: \n1 - Producto que desea\n2 - Cantidad\n3 - Salir"))
    switch (opcion) {
        case 1:
            compraProductoCliente()
            break
        case 2:
            cantidadProductoCliente()
            break
        case 3:
            repetir = false
            break
    }
}


function compraProductoCliente() {
    productoCliente = prompt("Que producto desea comprar: ")
    if (producto == productoCliente) {
        console.log("Seleccionaste: " + producto)
    } else {
        console.log("Ese articulo no existe en nuestro inventario")
    }
}

function cantidadProductoCliente() {
    cantidadCliente = Number(prompt("Que cantidad desea comprar: "))
    console.log("Seleccionaste: " + cantidadCliente)
    if (cantidadCliente >= 10 && cantidadCliente <= 19) {
        console.log("Felicidaes tienes un 10 % de descuento en tu compra !!")
    } else if (cantidadCliente >= 20) {
        console.log("Felicidades tienes un 20 % de descuento en tu compra !! ")
    }
}


while (repetirInventario) {
    var opcion = Number(prompt("Desea ver el inventario actual? : \n1 - Si\n2 - No"))
    switch (opcion) {
        case 1:
            inventarioActual()
            break
        case 2:
            repetirInventario = false
            break
    }
}

function inventarioActual() {
    cantidad -= cantidadCliente
    console.log("Queda esta cantidad de articulos en nuestro inventario: " + cantidad)
}






