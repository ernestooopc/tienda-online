import { Component } from '@angular/core';
import { Producto } from './model/producto-model';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent,FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: Producto[] = [
    new Producto('Producto1',110),
    new Producto('Producto2',110),
    new Producto('Producto3',110),

  ];

  descripcionInput:string = '';
  precioInput: number | null = null;

  agregarProducto(){
    if(this.descripcionInput.trim() == '' || this.precioInput == null || this.precioInput <=0){
      console.log("Debe ingresar una descripción y un precio validos")
      return;
    }

    const producto = new Producto(this.descripcionInput,this.precioInput);
    this.productos.push(producto);

    //Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;


  }

}
