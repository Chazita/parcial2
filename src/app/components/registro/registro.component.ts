import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, public auth: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl(['', Validators.required, Validators.email]),
      password: new FormControl([
        '',
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl(['', Validators.required]),
    });
  }
}
