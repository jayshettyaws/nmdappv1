import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';

// angular mterial module
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    MaterialModule
  ]
})
export class CreateAccountModule { }
