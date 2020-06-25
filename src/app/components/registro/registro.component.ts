import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  userNameFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  Register() {
    if (
      this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.userNameFormControl.valid
    ) {
      this.auth.signUp(
        this.emailFormControl.value,
        this.passwordFormControl.value,
        this.userNameFormControl.value
      );
    }
  }
}
