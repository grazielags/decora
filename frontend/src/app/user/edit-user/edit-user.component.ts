import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./../../model/user.model";
import { UserService } from "./../../service/user.service";

@Component({
  selector: 'sel-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    if(!userId) {
      alert("Ação inválida.")
      this.router.navigate(['user']);
      return;
    }

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

    this.userService.getUserById(userId)
      .subscribe( data => {
        this.user = data;
      });
  }

  editUser() {
    this.userService.updateUser(this.user)
      .subscribe( data => {
        this.router.navigate(['users']);
      });
  }
}