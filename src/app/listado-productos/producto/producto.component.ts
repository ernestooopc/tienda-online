import { Component, Input } from '@angular/core';
import { Producto } from '../model/producto-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {



  @Input() producto! : Producto;

  constructor(private router:Router){}


  editarProducto(id:number) {

  //pasampos la ID en la url
    this.router.navigate(['/editar',id]);
    }

}
