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

  public getVet(idVet: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/vets/' + idVet,
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public getVetRoles(idVet: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/vets/' + idVet + '/roles',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public vetRegister(vet: Vet) {
    return this.http.post(
      this.urlApiAdmin + '/admin/vets',
      this.gAuthServ.getFormUrlEncoded(vet),
      {headers: this.gAuthServ.getHeaders()});
  }

  public vetUpdate(vet: Vet, idVet: string) {
    return this.http.put(
      this.urlApiAdmin + '/admin/vets/' + idVet,
      this.gAuthServ.getFormUrlEncoded(vet),
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public asignRole(idVet: string, idRole: string) {
    return this.http.post(
      this.urlApiAdmin + '/admin/vets/' + idVet + '/roles/asign',
      this.gAuthServ.getFormUrlEncoded({
        id_role: idRole
      }),
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public denyRole(idVet: string, idRole: string) {
    return this.http.post(
      this.urlApiAdmin + '/admin/vets/' + idVet + '/roles/deny',
      this.gAuthServ.getFormUrlEncoded({
        id_role: idRole
      }),
      {headers: this.gAuthServ.getHeaders()}
    );
  }

}