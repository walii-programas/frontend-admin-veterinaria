import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";

@Injectable({
  providedIn:'root'
})

export class LoginService {

  // vars
  private urlApi = '';

  constructor(
    private http:HttpClient,
    private globalAuth: GlobalAuthService
  ) {}

  // metods
  public login(email: string, password: string) {
    return this.http.post(this.urlApi + 'auth/login', this.globalAuth.getFormUrlEncoded({
      email: email,
      password: password
    }), {headers: this.globalAuth.getHeaders()})
  }
}