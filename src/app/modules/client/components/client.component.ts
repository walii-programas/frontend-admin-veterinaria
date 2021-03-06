import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ClientService } from "../service/client.service";
import { ClientListAll } from '../interfaces/client.interface';

// 
  interface ClientForTable {
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
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  // variables
  clientFormReg!: FormGroup;
  vetsAll: ClientListAll[] = [];

  constructor(
    pipe: DecimalPipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
    // init form vet register
    this.clientFormReg = this.formBuilder.group({
      'firstname': ['',[Validators.required, Validators.minLength(3)]],
      'lastname': ['',[Validators.required, Validators.minLength(3)]],
      'dni': ['',[Validators.required, Validators.minLength(8)]],
      'phone': ['',[Validators.required, Validators.minLength(9)]],
      'address': ['',[Validators.required, Validators.minLength(3)]],
      'email': ['',[Validators.required, Validators.email, Validators.minLength(3)]],
      'password': ['',[Validators.required, Validators.minLength(3)]]
    });
  }

  // ---------------
  countries$: Observable<Country[]>;
  filter = new FormControl('');
  // -----------------

  // switch page
  switchListclient = true;
  switchRegclient = false;

  spinnerStatus = false;

  // UI methods--

  switchPageReg() {
    this.switchListclient = false;
    this.switchRegclient = true;
  }

  switchPageList() {
    this.switchListclient = true;
    this.switchRegclient = false;
  }

  // api methods--

  // get client list
  clientGetListAll() {
    this.spinnerStatus = true;
    this.clientService.clientGetListAll().subscribe((res) => {
      console.log(res);
      this.spinnerStatus = false;
    }, (err) => {
      console.log(err);
      this.spinnerStatus = false;
    });
  }

  // register new client
  clientRegister(dataclient: any) {
    this.clientService.clientRegister(dataclient).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
