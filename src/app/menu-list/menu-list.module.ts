import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListRoutingModule } from './menu-list-routing.module';
import { MenuListComponent } from './menu-list.component';

// angular mterial module
import { MaterialModule } from '../shared/material.module';
import { BookingOptionsComponent } from './booking-options/booking-options.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';

import { EventService } from '../services/event.service';


@NgModule({
  declarations: [MenuListComponent, BookingOptionsComponent, SubEventsComponent, VendorInfoComponent],
  imports: [
    CommonModule,
    MenuListRoutingModule,
    MaterialModule
  ],
  providers:[EventService]
})
export class MenuListModule { }
