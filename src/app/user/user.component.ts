import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allCountry: any;
  allcountriesStates: any;

  continentsList: any = [];
  country: any = [];
  state: any = [];

  usercountry: any = [];

  constructor(public rout: Router, public ser: UserService) {}

  ngOnInit(): void {
    this.ser.allData().subscribe((d) => {
      this.allCountry = d;

      this.allCountry.forEach((v: any, i: any) => {
        if (!this.continentsList.includes(v.continents[0]))
          this.continentsList.push(v.continents[0]);
      });
    });
  }

  getData(f: NgForm) {
    this.ser.data(f.value);
    this.rout.navigateByUrl('/userdetails');
  }

  continentChange(d: HTMLSelectElement) {
    localStorage.setItem('continents', d.value);
    this.country = [];
    this.allCountry.forEach((v: any, i: any) => {
      if (v.continents[0] == d.value) this.country.push(v);
    });
  }

  countryChange(d: HTMLSelectElement) {
    this.allcountriesStates = this.ser.countriesStates;

    this.allcountriesStates.forEach((v: any, i: any) => {
      if (v.name == d.value) this.state = v.states;
    });

    this.country.forEach((v: any, i: any) => {
      if (v.name.common == d.value) this.usercountry.push(v);
    });

    let usrcn = {
      country: d.value,
      flag: this.usercountry[0].flags.png,
      map: this.usercountry[0].maps.googleMaps,
    };
    localStorage.setItem('usercountry', JSON.stringify(usrcn));
  }

  stateChange(d: HTMLSelectElement) {
    localStorage.setItem('state', d.value);
  }
}
