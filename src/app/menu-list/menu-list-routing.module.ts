import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list.component';
import { BookingOptionsComponent } from './booking-options/booking-options.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';


const routes: Routes = [
  {path:'', component : MenuListComponent},
  {path:'booking-option', component : BookingOptionsComponent},
  {path:'sub-event', component : SubEventsComponent},
  {path:'vendor', component : VendorInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuListRoutingModule { }
