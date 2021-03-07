import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { LoginComponent } from "./modules/login/components/login.component";
import { HomeComponent } from "./modules/home/components/home.component";
  // home's children
  import { ClientComponent } from './modules/client/components/client.component';
  import { PetComponent } from './modules/pet/components/pet.component';

    import { PetClinicalHistoryComponent } from './modules/pet/components/pet-clinical-history/pet-clinical-history.component';
    import { PetVaccinationCardComponent } from './modules/pet/components/pet-vaccination-card/pet-vaccination-card.component';

  import { VetComponent } from './modules/vet/components/vet.component';
  import { VaccineComponent } from './modules/vaccine/components/vaccine.component';

  import { PetSimpleServiceComponent } from './modules/pet/components/pet-simple-service/pet-simple-service.component';
  import { PetHospitalizedServiceComponent } from './modules/pet/components/pet-hospitalized-service/pet-hospitalized-service.component';
  import { VetEditComponent } from './modules/vet/components/vet-edit/vet-edit.component';
  import { RoleComponent } from "./modules/role/components/role.component";

/* guards */
import { AuthGuard } from './global/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'clientes', component: ClientComponent},
    {path: 'mascotas/:id', component: PetComponent},
    {path: 'historial-clinico/:id', component: PetClinicalHistoryComponent},
    {path: 'tarjeta-vacunas/:id', component: PetVaccinationCardComponent},
    {path: 'servicios-simples/:id', component: PetSimpleServiceComponent},
    {path: 'servicios-hospitalizacion/:id', component: PetHospitalizedServiceComponent},
    {path:'vacunas', component: VaccineComponent},
    {path: 'veterinarios', component: VetComponent},
    {path: 'editar-veterinario/:id', component: VetEditComponent},
    {path: 'roles', component: RoleComponent}
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
