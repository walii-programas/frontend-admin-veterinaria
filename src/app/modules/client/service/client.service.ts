import { Injectable } from "@angular/core";
import { Client } from "../interfaces/client.interface";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  // variables
  private urlApiAdmin = this.gAuthServ.urlApiAdmin; 
  
  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  // metodos
  public clientGetListAll() {
    return this.http.get(
      this.urlApiAdmin + '/admin/clients',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public getCLient(idCLient: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/clients/' + idCLient,
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public clientRegister(client: Client) {
    return this.http.post(
      this.urlApiAdmin + '/admin/clients', 
      this.gAuthServ.getFormUrlEncoded(client),
      {headers: this.gAuthServ.getHeaders()});
  }

}