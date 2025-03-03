import { Component } from '@angular/core';
import { Producto } from './model/producto-model';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProductoComponent, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: Producto[] = [];

  constructor(private productoService:ProductoService){
    this.productoService.detalleProductoEmitter.subscribe((
      producto:Producto
    )=>alert(`Producto: ${producto.description}, S/${producto.precio}`))
  }

  ngOnInit(){
    this.productos = this.productoService.productos;
  }





}
