import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { MyErrorStateMatcher } from '../../class/my-error-state-matcher.class';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  nombreControl = new FormControl('', [Validators.required]);
  marcaControl = new FormControl('', [Validators.required]);
  stockControl = new FormControl('', [Validators.required]);
  tipoControl = new FormControl('', [Validators.required]);
  localControl = new FormControl('', [Validators.required]);
  precioControl = new FormControl('', [Validators.required]);
  constructor(public data: DataService) {}

  ngOnInit(): void {}

  registrar() {
    const nombre = this.nombreControl.value;
    const marca = this.marcaControl.value;
    const stock = this.stockControl.value;
    const tipo = this.tipoControl.value;
    const local = this.localControl.value;
    const precio = this.precioControl.value;
    if (
      nombre !== '' &&
      marca !== '' &&
      stock !== '' &&
      tipo !== '' &&
      local !== '' &&
      precio !== ''
    ) {
      this.data.setProduto(nombre, marca, stock, tipo, local, precio);
    }
  }
}
