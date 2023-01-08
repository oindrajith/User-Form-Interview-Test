import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  formData: any;
  fullCountry: any;
  countriesStates: any;

  constructor(public http: HttpClient) {
    this.http.get('https://restcountries.com/v3.1/all')
  }

  data(d: any) {
    this.formData = d;
  }

  allData() {
    this.http.get('../../assets/countries+states.json').subscribe(d => this.countriesStates = d);
    // this.http.get('assets/countries+states.json').subscribe(d => this.countriesStates = d);
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}


