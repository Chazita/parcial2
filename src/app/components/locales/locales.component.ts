import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss'],
})
export class LocalesComponent implements OnInit {
  email: string;
  telefono: string;
  name: string;
  localidad: string;
  localForm: FormGroup;
  constructor(private fb: FormBuilder, public data: DataService) {}

  ngOnInit(): void {
    this.localForm = this.fb.group({
      email: new FormControl(['', Validators.required, Validators.email]),
      name: new FormControl(['', Validators.required]),
      telefono: new FormControl(
        ['', Validators.required],
        Validators.maxLength(10)
      ),
      localidad: new FormControl(['', Validators.required]),
    });
  }
}
