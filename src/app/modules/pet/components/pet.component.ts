import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { PetService } from "../service/pet.service";
import { PetListAll } from '../interfaces/pet.interface';
// import { Location } from "@angular/common";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  // variables
  idUser: string = '';

  petFormReg!: FormGroup;
  petsAll: PetListAll[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    // private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private petService: PetService
  ) {
    // get id_client on load
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id') || '0';
  }

  ngOnInit(): void {
    // init form vet register
    this.petFormReg = this.formBuilder.group({
      'name': ['',[Validators.required, Validators.minLength(3)]],
      'species': ['',[Validators.required, Validators.minLength(3)]],
      'breed': ['',[Validators.required, Validators.minLength(3)]],
      'color': ['',[Validators.required, Validators.minLength(3)]],
      'birthdate': ['',[Validators.required]],
      'sex': ['',[Validators.required, Validators.minLength(3)]],
      // 'photo': ['',[Validators.required, Validators.minLength(3)]]
    });
  }

  // switch page
  switchListpet = true;
  switchRegpet = false;

  spinnerStatus = false;

  // UI methods--

  switchPetReg() {
    this.switchListpet = false;
    this.switchRegpet = true;
  }

  switchPetList() {
    this.switchListpet = true;
    this.switchRegpet = false;
  }

  // backToPets() {
  //   this.location.back();
  // }

  // api methods--

  // get client's pet list
  petClientGetListAll() {
    this.spinnerStatus = true;
    this.petService.petsClientGetListAll(this.idUser).subscribe((res) => {
      console.log(res);
      this.spinnerStatus = false;
    }, (err) => {
      console.log(err);
      this.spinnerStatus = false;
    });
  }

  // register new pet
  petRegister(datapet: any) {
    this.petService.petRegister(datapet).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
