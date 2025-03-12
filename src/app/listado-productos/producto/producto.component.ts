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
  @Input() llave!: string;

  constructor(private router:Router){}


  editarProducto() {

  //pasampos la ID en la url
    this.router.navigate(['/editar',this.llave]);
    }

}
