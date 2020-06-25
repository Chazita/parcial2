import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { MyErrorStateMatcher } from '../../class/my-error-state-matcher.class';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  nombre = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl('', [Validators.required]);
  localidad = new FormControl('', [Validators.required]);

  constructor(public data: DataService) {}

  ngOnInit(): void {}

  registrar() {
    const nombre = this.nombre.value;
    const email = this.email.value;
    const telefono = this.telefono.value;
    const localidad = this.localidad.value;

    if (nombre !== '' && email !== '' && telefono !== '' && localidad !== '') {
      this.data.setLocal(nombre, email, telefono, localidad);
    }
  }
}
