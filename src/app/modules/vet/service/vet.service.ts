import { Injectable } from "@angular/core";
import { Vet } from "../interfaces/vet.interface";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";

@Injectable({
  providedIn: 'root'
})

export class VetService {

  // variables
  private urlApiAdmin = this.gAuthServ.urlApiAdmin; 
  
  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  // metodos
  public vetGetListAll() {
    return this.http.get(
      this.urlApiAdmin + '/admin/vets',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public vetRegister(vet: Vet) {
    return this.http.post(
      this.urlApiAdmin + '/admin/vets',
      this.gAuthServ.getFormUrlEncoded(vet),
      {headers: this.gAuthServ.getHeaders()});
  }

}