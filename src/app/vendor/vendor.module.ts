import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';

// angular mterial module
import { MaterialModule } from '../shared/material.module';


// ngx 
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [VendorListComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MaterialModule,
    NgxStarRatingModule
  ]
})
export class VendorModule { }
