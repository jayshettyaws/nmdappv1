import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  new_account(){
    // save user details and redirect to login page
    this.router.navigate(['./login']);
  }

  back_home(){
    this.router.navigate(['']);
  }
}
