import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    back_home(){
      this.router.navigate(['']);
    }

    login(){
      // login details and cookies, session info
      this.router.navigate(['./main-menu']);
    }
}
