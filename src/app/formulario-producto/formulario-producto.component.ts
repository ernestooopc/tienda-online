import { Component} from '@angular/core';
import { Producto } from '../listado-productos/model/producto-model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {

  descriptionInput: string = '';
  precioInput: number | null = null;
  constructor(private productoService:ProductoService,
    private route:Router
  ){}

  guardarProducto(evento:Event){
    evento.preventDefault();

    if(this.descriptionInput === ''
      || this.precioInput == null
      || this.precioInput <=0){
      console.log("Debe ingresar una descripción y un precio validos")
      return;
    }

    const producto = new Producto(this.descriptionInput,this.precioInput);

    //Agregamos el nuevo Producto usando el servicio
    this.productoService.agregarProducto(producto);


    //Limpiamos los campos del formulario
    this.descriptionInput = '';
    this.precioInput = null;

    //Redirigir
    this.route.navigate(['/'])


  }

  cancelar(){
    this.route.navigate(['/'])
  }

}
