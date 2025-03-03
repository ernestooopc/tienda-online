import { Component, Input } from '@angular/core';
import { Producto } from '../model/producto-model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {



  @Input() producto! : Producto;

  constructor(private productoService : ProductoService){}


  emitirDetalleProducto() {
    this.productoService.detalleProductoEmitter.emit(this.producto);
    }

}
