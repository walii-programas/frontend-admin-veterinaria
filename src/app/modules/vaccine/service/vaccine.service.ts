import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "src/app/global/services/globalAuth.service";
import { Vaccine } from "../interfaces/vaccine.interface";

@Injectable({
  providedIn: 'root'
})

export class VaccineService {

  // variables
  private urlApiAdmin = this.gAuthServ.urlApiAdmin;

  constructor(
    private http: HttpClient,
    private gAuthServ: GlobalAuthService
  ) {}

  /* methods */
  getVaccines() {
    return this.http.get(
      this.urlApiAdmin + '/admin/vaccines',
      {headers: this.gAuthServ.getHeaders()}
    );
  }

  postVaccine(vaccine: Vaccine) {
    return this.http.post(
      this.urlApiAdmin + '/admin/vaccines',
      this.gAuthServ.getFormUrlEncoded(vaccine),
      {headers: this.gAuthServ.getHeaders()}
    );
  }

}