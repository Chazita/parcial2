import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(['', Validators.required, Validators.email]),
      password: new FormControl([
        '',
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
