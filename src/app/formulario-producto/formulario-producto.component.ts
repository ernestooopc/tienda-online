import { Component} from '@angular/core';
import { Producto } from '../listado-productos/model/producto-model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {

  descriptionInput: string = '';
  precioInput: number | null = null;
  constructor(private productoService:ProductoService){}

  agregarProducto(evento:Event){
    evento.preventDefault();

    if(this.descriptionInput === ''
      || this.precioInput == null
      || this.precioInput <=0){
      console.log("Debe ingresar una descripción y un precio validos")
      return;
    }

    const producto = new Producto(this.descriptionInput,this.precioInput);

    //Emitir el eveneto de nuevo producto
    // this.nuevoProducto.emit(producto)

    //Agregamos el nuevo Producto usando el servicio
    this.productoService.agregarProducto(producto);


    //Limpiamos los campos del formulario
    this.descriptionInput = '';
    this.precioInput = null;


  }

}
