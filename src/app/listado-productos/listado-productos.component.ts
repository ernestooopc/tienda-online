import { Component } from '@angular/core';
import { Producto } from './model/producto-model';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: Producto[] = [];

  constructor(private productoService:ProductoService,
    private router:Router
  ){}

  ngOnInit(){
    //Inicializar los productos
    this.productos = this.productoService.productos;
    //Procesamos el evento emitido
    this.productoService.detalleProductoEmitter.subscribe((
      producto:Producto
    )=>alert(`Producto: ${producto.description}, S/${producto.precio}`))
  }


  agregarProducto(){
    this.router.navigate(['agregar'])
  }


}
