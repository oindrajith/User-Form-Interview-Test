import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
data:any=''
  constructor() { }

  ngOnInit(): void {
   this.data = localStorage.getItem("continents")
  }

}
