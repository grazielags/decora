import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from "./../service/user.service";
import { User } from "./../model/user.model"

@Component({
  selector: 'sel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  user: User;
  users: User[];

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
    // this.userService.getUsers()
    //   .subscribe( data => {
    //     this.users = data;
    //   }
    // );
  }

  logar() {
    // this.userService.calculoCusto(this.calculoCusto)
    //   .subscribe( data => {
    //     this.calculoCusto = data;
    //     console.log(this.calculoCusto.veiculo);
    //   });
  }

}
