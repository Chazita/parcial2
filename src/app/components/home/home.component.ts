import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  settings = {
    columns: {
      nombre: {
        title: 'Nombre',
      },
      marca: {
        title: 'Marca',
      },
      stock: {
        title: 'Stock',
      },
      tipo: {
        title: 'Tipo',
      },
      local: {
        title: 'Local',
      },
      precio: {
        title: 'Precio',
      },
    },
    edit: {
      confirmSave: true,
    },
    actions: {
      add: false,
      delete: false,
    },
  };

  data;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProductos().subscribe((prod) => {
      this.data = prod;
      console.log(this.data);
    });
  }

  update($event) {
    this.dataService.updateProducto($event.data.uid, $event.newData);
  }
}
