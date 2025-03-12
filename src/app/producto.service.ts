import { Injectable } from '@angular/core';
import { Producto } from './listado-productos/model/producto-model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  productos: {[llave:string]:Producto} = {}

  //Observable para notificar cambios
  productosActualizados = new Subject<{[llave:string]:Producto}>();

  constructor(private datosService: DatosService){

  }

  listarProducto(){
    return this.datosService.listarProductos()
  }




    //Agregar o Motidicar un producto existente
    guardarProducto(producto: Producto, llave:string | null = null) {

      if(llave === null){
        //Caso agregar
        this.datosService.guardarProducto(producto).subscribe(()=>{
          this.refrescarProductos()
        });
      }else{
        //Caso de actualizar
        this.datosService.modificarProducto(producto, llave).subscribe(()=>{
          this.refrescarProductos();
        });
      }

    }

    private refrescarProductos(){
      this.listarProducto().subscribe((productos: {[llave:string]:Producto})=>{
        this.setProductos(productos);
      });
    }

    setProductos(productos: {[llave:string]:Producto}){
      this.productos = productos;
      this.productosActualizados.next(this.productos); //Nos permite emitir la actualizacion de la lista
    }

    getProductoByLlave(llave:string):Producto | undefined {
      return this.productos[llave];
    }


    eliminarProducto(llave:string){
      this.datosService.eliminarProducto(llave).subscribe(()=>{
        this.refrescarProductos();
      });
    }
}
