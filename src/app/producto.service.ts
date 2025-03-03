import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './listado-productos/model/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [
      new Producto('Producto1',110),
      new Producto('Producto2',110),
      new Producto('Producto3',110),

    ];

    detalleProductoEmitter = new EventEmitter<Producto>();

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    }

}
