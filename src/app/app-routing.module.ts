import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'about',component : AboutComponent},
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'new-acnt',
    loadChildren: () =>
      import('./create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  {
    path: 'main-menu',
    loadChildren: () =>
      import('./menu-list/menu-list.module').then(
        (m) => m.MenuListModule
      ),
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./vendor/vendor.module').then(
        (m) => m.VendorModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
