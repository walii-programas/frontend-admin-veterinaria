import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Login } from '../interfaces/login.interface';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // init form
    this.initFormLogin();
  }

  /* variables */
  loginForm: FormGroup;
  spinnerStatus = false;

  /* API methods */
  login(dataLogin: Login) {
    this.spinnerStatus = true;
    this.loginService.login(dataLogin).subscribe((res) => {
      console.log(res);
      localStorage.setItem('expires_in', res['expires_in']);
      localStorage.setItem('token', res['access_token']);
      this.spinnerStatus = false;
      if (res['vet'] == true) {
        localStorage.setItem('loginVet', 'true');
        localStorage.setItem('loginClient', 'false');
        this.router.navigateByUrl('/home');
      }
    }, (err) => {
      console.log(err);
      this.spinnerStatus = false;
      alert('Credenciales incorrectas');
    });
  }

  /* methods */
  initFormLogin() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

}
