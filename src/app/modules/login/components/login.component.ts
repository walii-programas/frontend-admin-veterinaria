import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Login } from '../interfaces/login.interface';
import { LoginService } from '../service/login.service';
import { VetService } from "../../vet/service/vet.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private vetService: VetService,
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
      // console.log(res);
      if (res['vet'] == true) {
        localStorage.setItem('expires_in', res['expires_in']);
        localStorage.setItem('token', res['access_token']);
        this.spinnerStatus = false;
        this.vetService.getVetRoles(res['user'].id).subscribe((res) => {
          // const role = res['data'].find(element => element.name == 'Administrador');
          // console.log(role);
          res['data'].forEach(roleObject => {
            if (roleObject.name == 'Administrador') {
              const role = roleObject.name;
              localStorage.setItem('roleVet', role);
            }
          });
        })
        this.router.navigateByUrl('/home');
      } else {
        this.spinnerStatus = false;
        alert('Este usuario no está autorizado');
      }
      this.spinnerStatus = false;
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
