import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from "./../../model/user.model";
import { UserService } from "./../../service/user.service";

@Component({
  selector: 'sel-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  user: User;

  ngOnInit() {
    this.user = {
      id: null,
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      profile: '',
      roleString: ''
    }
  }

  onSubmit() {
    this.userService.createUser(this.user)
      .subscribe( data => {
        this.router.navigate(['users']);
      });
  }

}