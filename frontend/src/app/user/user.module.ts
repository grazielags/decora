import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
    FormsModule
  ],
  declarations: [AddUserComponent, EditUserComponent, ListUserComponent]
})
export class UserModule { }
