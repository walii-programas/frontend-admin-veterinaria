import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, DecimalPipe, SlicePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { LoginComponent } from './modules/login/components/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/components/home.component';
import { VetComponent } from './modules/vet/components/vet.component';
import { ClientComponent } from './modules/client/components/client.component';
import { PetComponent } from './modules/pet/components/pet.component';
import { PetClinicalHistoryComponent } from './modules/pet/components/pet-clinical-history/pet-clinical-history.component';
import { PetVaccinationCardComponent } from './modules/pet/components/pet-vaccination-card/pet-vaccination-card.component';
import { VaccineComponent } from './modules/vaccine/components/vaccine.component';
import { PetSimpleServiceComponent } from './modules/pet/components/pet-simple-service/pet-simple-service.component';
import { PetHospitalizedServiceComponent } from './modules/pet/components/pet-hospitalized-service/pet-hospitalized-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    HomeComponent,
    VetComponent,
    ClientComponent,
    PetComponent,
    PetClinicalHistoryComponent,
    PetVaccinationCardComponent,
    VaccineComponent,
    PetSimpleServiceComponent,
    PetHospitalizedServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // DecimalPipe,
    SlicePipe,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
