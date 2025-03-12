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


  llaveProducto: string | null = null;
  descriptionInput: string = '';
  precioInput: number | null = null;


  constructor(private productoService:ProductoService,
    private router:Router,
    private route: ActivatedRoute
  ){}


  ngOnInit(){
    //Verificamos si debemos cargar un producto ya existente
    const llave = this.route.snapshot.paramMap.get('llave');
    if(llave){
      const producto = this.productoService.getProductoByLlave(llave);
      if(producto){
        //Si encontramos el producto lo cargamos en el formulario
        this.llaveProducto = llave
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

    const producto = new Producto(this.descriptionInput,this.precioInput);

    //Agregamos el nuevo Producto usando el servicio
    this.productoService.guardarProducto(producto, this.llaveProducto);


    //Limpiamos los campos del formulario
    this.limpiarFormulario(),

    //Redirigir
    this.router.navigate(['/'])


  }

  cancelar(){
    this.router.navigate(['/'])
  }

  eliminarProducto(){
    if(this.llaveProducto !== null){
      this.productoService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      this.router.navigate(['/'])
    }
  }

  limpiarFormulario(){
    this.llaveProducto = null;
    this.descriptionInput = '';
    this.precioInput = null;
  }

}
