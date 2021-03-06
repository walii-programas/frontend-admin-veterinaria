import { Injectable } from "@angular/core";
import { Pet } from "../interfaces/pet.interface";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";

@Injectable({
  providedIn: 'root'
})

export class PetService {

  // variables
  private urlApiAdmin = '';
  
  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  // metodos
  public petsClientGetListAll(idClient: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/clients/' + idClient + '/pets',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public petRegister(pet: Pet) {
    return this.http.post(
      this.urlApiAdmin + '/admin/pets', 
      this.gAuthServ.getFormUrlEncoded(pet),
      {headers: this.gAuthServ.getHeaders()});
  }

}