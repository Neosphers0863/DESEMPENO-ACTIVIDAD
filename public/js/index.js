
var producto
var cantidad
var precio

var ProductoCliente
var cantidadCliente

var ingresarProducto = true
var ingresarCompra = true
var verInventario = true

while (ingresarProducto) {
    var opcion = Number(prompt("Inventario: \n1 - Producto\n2 - Cantidad\n3 - Precios\n4 - Salir"))
    switch (opcion) {
        case 1:
            agregarProducto()
            break
        case 2:
            agregarCantidad()
            break
        case 3:
            agregarPrecio()
            break
        case 4:
            ingresarProducto = false
    }
}

function agregarProducto() {
    producto = prompt("Ingresa un producto")
    console.log("Producto agregado: " + producto);
}

function agregarCantidad() {
    cantidad = Number(prompt("Ingresa cantidad disponible"))
    console.log("Disponibles: " + cantidad);
}

function agregarPrecio() {
    precio = Number(prompt("Ingresa el precio unitario del producto"))
    console.log("Precio del producto: " + precio);
}

while (ingresarCompra) {
    var opcion = Number(prompt("Bienvenido que desea comprar: \n1 - Producto desea\n2 - Cantidad\n3 - Salir"))
    switch (opcion) {
        case 1:
            compraProductoCliente()
            break
        case 2:
            cantidadProductoCliente()
            break
        case 3:
            ingresarCompra = false
            break
    }
}

function compraProductoCliente() {
    ProductoCliente = prompt("Que producto desea comprar: ")
    if (producto == ProductoCliente) {
        console.log("Seleccionaste: " + producto);
    } else {
        console.log("Ese producto no existe en nuestro inventario");
    }
}

function cantidadProductoCliente() {
    cantidadCliente = Number(prompt("Que cantidad desea comprar: "))
    console.log("Seleccionaste: " + cantidadCliente);
    if (cantidadCliente >= 10 && cantidadCliente <= 19) {
        console.log("Felicidades tienes un 10 % de descuento en tu compra !!");
    } else if (cantidadCliente >= 20) {
        console.log("Felicidades tienes un 20 % de descuento en tu compra !!");
    }
}

while (verInventario) {
    var opcion = Number(prompt("Desea ver el inventario actual? : \n1 - Si\n2 - No"))
    switch (opcion) {
        case 1:
            inventarioActual()
            break
        case 2:
            verInventario = false
            break
    }
}

function inventarioActual (){
    cantidad -= cantidadCliente
    console.log("Queda esta cantidad de productos en nuestro inventario: " + cantidad)
}




