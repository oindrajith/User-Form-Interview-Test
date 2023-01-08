import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  data: any;

  constructor(public ser: UserService) {}

  ngOnInit(): void {
    let mycn:any = localStorage.getItem("usercountry");
    this.data = JSON.parse(mycn);
  }
 
}
