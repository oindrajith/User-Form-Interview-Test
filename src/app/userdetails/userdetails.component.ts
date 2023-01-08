import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  data: any = {};

  constructor(public rout: Router, public ser: UserService) {}

  ngOnInit(): void {
    this.data = this.ser.formData;
  }

  backtoform() {
    this.rout.navigateByUrl('/user');
  }
}
