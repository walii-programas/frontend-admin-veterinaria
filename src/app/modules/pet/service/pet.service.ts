import { Injectable } from "@angular/core";
import { Pet } from "../interfaces/pet.interface";
import { PetClinicalHistory } from "../interfaces/petClinicalHistory.interface";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../../global/services/globalAuth.service";

@Injectable({
  providedIn: 'root'
})

export class PetService {

  // variables
  private urlApiAdmin = this.gAuthServ.urlApiAdmin;
  
  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  //* methods */
  // pet
  public petsClientGetListAll(idClient: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/clients/' + idClient + '/pets',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public getPet(idPet: string) {
    return this.http.get(
      this.gAuthServ.urlApiAdmin + '/admin/pets/' + idPet,
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public petRegister(pet: Pet) {
    return this.http.post(
      this.urlApiAdmin + '/admin/pets', 
      this.gAuthServ.getFormUrlEncoded(pet),
      {headers: this.gAuthServ.getHeaders()});
  }

  // Pet-clinical-history
  public getPetClinicalHistoriesByPet(idPet: string) {
    return this.http.get(
      this.urlApiAdmin + '/admin/pets/' + idPet + '/clinical-histories',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  public postPetClinicalHistory(clinicalHistory: PetClinicalHistory) {
    return this.http.post(
      this.urlApiAdmin + '/admin/clinical-histories',
      this.gAuthServ.getFormUrlEncoded(clinicalHistory),
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  // Pet-vaccination-cards

}
