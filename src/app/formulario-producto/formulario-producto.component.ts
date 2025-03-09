import { Component} from '@angular/core';
import { Producto } from '../listado-productos/model/producto-model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {


  productoId: number | null = null;
  descriptionInput: string = '';
  precioInput: number | null = null;


  constructor(private productoService:ProductoService,
    private router:Router,
    private route: ActivatedRoute
  ){}


  ngOnInit(){
    //Verificamos si debemos cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        //Si encontramos el producto lo cargamos en el formulario
        this.productoId = producto.id;
        this.descriptionInput = producto.description;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento:Event){
    evento.preventDefault();

    if(this.descriptionInput === ''
      || this.precioInput == null
      || this.precioInput <=0){
      console.log("Debe ingresar una descripción y un precio validos")
      return;
    }

    const producto = new Producto(this.productoId,this.descriptionInput,this.precioInput);

    //Agregamos el nuevo Producto usando el servicio
    this.productoService.guardarProducto(producto);


    //Limpiamos los campos del formulario
    this.limpiarFormulario(),

    //Redirigir
    this.router.navigate(['/'])


  }

  cancelar(){
    this.router.navigate(['/'])
  }

  eliminarProducto(){
    if(this.productoId !== null){
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/'])
    }
  }

  limpiarFormulario(){
    this.productoId = null;
    this.descriptionInput = '';
    this.precioInput = null;
  }

}
