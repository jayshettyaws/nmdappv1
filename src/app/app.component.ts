import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookingApp';
  
  constructor(private router: Router){

  }
  show_about(){
    this.router.navigate(['about' ]);
  }

  home(){
    this.router.navigate(['main-menu' ]);
  }
}
