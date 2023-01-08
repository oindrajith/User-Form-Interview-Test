import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
data:any=''
  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem("state")
  }

}
