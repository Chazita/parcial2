import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  name: string;
  marca: string;
  stock: string;
  tipo: string;
  local: string;
  precio: string;
  localForm: FormGroup;
  constructor(private fb: FormBuilder, public data: DataService) {}

  ngOnInit(): void {
    this.localForm = this.fb.group({
      name: new FormControl(['', Validators.required]),
      marca: new FormControl(['', Validators.required]),
      stock: new FormControl(['', Validators.required]),
      tipo: new FormControl(['', Validators.required]),
      local: new FormControl(['', Validators.required]),
      precio: new FormControl(['', Validators.required]),
    });
  }
}
