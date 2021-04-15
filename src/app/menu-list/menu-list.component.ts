import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Constants } from '../../assets/files/Constants';


let constant = new Constants();
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  main_events = [];

  constructor(private router: Router) { }

  ngOnInit() {
    //call APi to get main events list from Db
    
    this.main_events = [
      {id : 1, name : 'Marriage',type : 'main_event', param : constant.MARRIAGE},
      {id : 2, name : 'Birthday Party',type : 'main_event', param : constant.BIRTHDAY},
      {id : 3, name : 'Naming ceremony',type : 'main_event', param : constant.NAMING_CEREMONY},
      {id : 4, name : 'Reception',type : 'main_event', param : constant.RECEPTION},
      {id : 5, name : 'House Warming',type : 'main_event', param : constant.HOUSE_WARMING},
      {id : 6, name : 'Baby Shower',type : 'main_event', param : constant.BABY_SHOWER},
      {id : 7, name : 'Engagement',type : 'main_event', param : constant.ENGAGEMENT},
      {id : 8, name : 'Pooja',type : 'main_event', param : constant.POOJA},
      {id : 9, name : 'Yakshagana',type : 'main_event', param : constant.YAKSHAGANA},
    ]
  }

  select_event(event){
    this.router.navigate(['main-menu/booking-option', {event : event} ]);
  }

  back_home(){
   this.router.navigate(['']);
  }
}
