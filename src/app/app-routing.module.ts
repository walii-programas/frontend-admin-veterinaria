import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from "./modules/login/components/login.component";
import { HomeComponent } from "./modules/home/components/home.component";
  // home's children
  import { ClientComponent } from './modules/client/components/client.component';
  import { PetComponent } from './modules/pet/components/pet.component';
  import { VetComponent } from './modules/vet/components/vet.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'clientes', component: ClientComponent},
    {path: 'mascotas/:id', component: PetComponent},
    // {path:'servicios'},
    // {path:'vacunas'},
    {path: 'veterinarios', component: VetComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
