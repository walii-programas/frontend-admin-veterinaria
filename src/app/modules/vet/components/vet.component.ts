import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from "@angular/router";
import { VetService } from "../service/vet.service";
import { VetListAll } from '../interfaces/vet.interface';

// 
  interface VetForTable {
    fullname: "",
    dni: "",
    petsQuantity: ""
  }
// 

// -----------------------------------------------
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}
// ----------------------------------------------

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.scss']
})
export class VetComponent implements OnInit {

  // variables
  vetFormReg!: FormGroup;
  vetsAll: VetListAll[] = [];

  constructor(
    pipe: DecimalPipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private vetService: VetService
  ) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
    // init form vet register
    this.vetFormReg = this.formBuilder.group({
      'firstname': ['',[Validators.required, Validators.minLength(3)]],
      'lastname': ['',[Validators.required, Validators.minLength(3)]],
      'dni': ['',[Validators.required, Validators.minLength(8)]],
      'phone': ['',[Validators.required, Validators.minLength(9)]],
      'address': ['',[Validators.required, Validators.minLength(3)]],
      'email': ['',[Validators.required, Validators.email, Validators.minLength(3)]],
      'password': ['',[Validators.required, Validators.minLength(3)]],
      'cmvp': ['',[Validators.required]]
    });
  }

  // ---------------
  countries$: Observable<Country[]>;
  filter = new FormControl('');
  // -----------------

  // switch page
  switchListVet = true;
  switchRegVet = false;

  spinnerStatus = false;

  // UI methods--

  switchPageReg() {
    this.switchListVet = false;
    this.switchRegVet = true;
  }

  switchPageList() {
    this.switchListVet = true;
    this.switchRegVet = false;
  }

  // api methods--

  // get vet list
  vetGetListAll() {
    this.spinnerStatus = true;
    this.vetService.vetGetListAll().subscribe((res) => {
      console.log(res);
      this.spinnerStatus = false;
    }, (err) => {
      console.log(err);
      this.spinnerStatus = false;
    });
  }

  // register new vet
  vetRegister(dataVet: any) {
    this.vetService.vetRegister(dataVet).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
