import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from "./user/add-user/add-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
  { path : '', component : HomeComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: EditUserComponent }
]