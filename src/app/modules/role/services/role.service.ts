import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";
import { Role } from "../interfaces/role.interface";

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  /* variables */
  private urlApiAdmin = this.gAuthServ.urlApiAdmin;

  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  /* methods */
  public getRoles() {
    return this.http.get(
      this.urlApiAdmin + '/admin/roles',
      {headers: this.gAuthServ.getHeaders()}
    );
  }
}