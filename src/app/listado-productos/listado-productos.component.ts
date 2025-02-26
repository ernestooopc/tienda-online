import { Component } from '@angular/core';
import { Producto } from './model/producto-model';

@Component({
  selector: 'app-listado-productos',
  imports: [],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: Producto[] = [
    new Producto('Producto1',110),
    new Producto('Producto2',110),
    new Producto('Producto3',110),

  ];

  agregarProducto(description: string,precio:number):void{
    if(description && precio){
      const nuevoProducto = new Producto(description,precio);
      this.productos.push(nuevoProducto);
    }
  }

}
