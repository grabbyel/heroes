
class Factura {

    #cliente
    #producto
    #importe
    #fecha

    getCliente() {
        return this.#cliente.mostrarCliente()
    }
    setCliente(cliente) {
        if (typeof cliente != 'object') return alert('el cliente en setCliente de Factura no es correcto')
        else this.#cliente = new Cliente(cliente.nombre, cliente.cif, cliente.poblacion)
    }

    getProducto() {
        return this.#producto
    }
    setProducto(producto) {
        if (typeof producto != 'object') return alert('El producto en setProducto de Factura no es correcto')
        else this.#producto = new Producto(producto.id, producto.descripcion, producto.precio)
    }

    getImporte() {
        return this.#importe
    }
    setImporte(importe) {
        if (typeof importe != 'number') { return alert('El importe en setImporte de Factura no es correcto') }
        if (this.getProducto()) this.getProducto().getPrecio() = this.#importe
        else this.#importe = importe
    }

    getFecha() {
        return this.#fecha
    }
    setFecha(fecha) {
        this.#fecha = fecha
    }

    constructor(cliente, producto, importe, fecha) {

        this.setCliente(cliente)
        this.setProducto(producto)
        this.setImporte(importe)
        this.setFecha(fecha)
    }

    mostrarFactura() {
        return console.write(`
            Nombre Cliente: ${this.#cliente.getNombre()} <br/>
            Cif: ${this.#cliente.getCif()}<br/>
            Direccion: ${this.#cliente.getDireccion()}<br/>
            *************************************************<br/>
            ID de producto adquirido: ${this.#producto.getId()}<br/>
            Descripcion: ${this.#producto.getDescripcion()}<br/>
            Importe: ${this.#importe.getPrecio()}<br/>
            *************************************************<br/>
            Fecha: ${this.#fecha.getFecha()}<br/>            
        `)
    }
}