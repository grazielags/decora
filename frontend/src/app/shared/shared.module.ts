import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from "./../service/user.service";

@NgModule({
  declarations: [],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ UserService ]
    }
  }
}
