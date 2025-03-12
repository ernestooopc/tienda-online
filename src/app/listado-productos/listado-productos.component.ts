import { Component } from '@angular/core';
import { Producto } from './model/producto-model';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: {[llave:string]:Producto} = {}
  productosSubscription: Subscription | null = null;
  constructor(private productoService:ProductoService,
    private router:Router,

  ){}

  ngOnInit(){
    //Inicializar los productos
    this.cargarProductos();

    //Escucchamos los cambios en la lista de productos
    this.productosSubscription = this.productoService.productosActualizados.subscribe((productos)=>{
      this.productos = productos;
    })


  }

  cargarProductos(){
    this.productoService.listarProducto().subscribe((productos: {[llave:string]:Producto})=>{
    this.productos = productos;
    this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos)
    }
    return [];
  }


  agregarProducto(){
    this.router.navigate(['agregar'])
  }

  ngOnDestroy():void{
    if(this.productosSubscription != null){
      this.productosSubscription.unsubscribe();
    }
  }


}
