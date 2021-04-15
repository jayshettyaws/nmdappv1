import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MatDialog} from '@angular/material/dialog';

import { EventService } from '../../services/event.service';


@Component({ 
  selector: 'app-sub-events',
  templateUrl: './sub-events.component.html',
  styleUrls: ['./sub-events.component.scss']
})
export class SubEventsComponent implements OnInit {

  is_selected_events: boolean = false;
  checked : any;
  selected_events = [];
  open_index : number;

  div_open : boolean = false;

  sub_events_list = [
    {id : 1, name: 'Catering', date :'', options : [
        {id:11, name : 'Veg', checked : false},
        {id:12, name : 'Non-Veg', checked : false}
      ]
    },
    {id : 2, name: 'Decoration', date :'', options : [
        {id:21, name : 'Artificial', checked : false},
        {id:22, name : 'Flower', checked : false}
      ]
    },
    {id : 3, name: 'Priest(Archaka)',  date :'', options : [
        {id:31, name : 'Pooja', checked : false},
        {id:32, name : 'Serving', checked : false}
      ]
    },
    {id : 4, name: 'Music',  date :'', options : [
        {id:41, name : 'Band/Orchestra', checked : false},
        {id:42, name : 'Vadya', checked : false}
      ]
    }

  ];

  main_event : string = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public service : EventService) { }

  ngOnInit(): void {
    this.main_event = this.route.snapshot.paramMap.get('event');

  }
  set_step(index){
    this.open_index = index;
  }

  booking_options_page(){
    this.router.navigate(['main-menu/booking-option', {event : this.main_event} ]);
  }

  submit_sub_events(){
    this.is_selected_events = true;
    //this.router.navigate(['main-menu/booking-option', {event : this.main_event} ]);
  }


  // call service

  save_events(){
    this.service.save_events().subscribe(result => {
      debugger;
      console.log(result)
      } 
    );
  }


  checked_option(event, index,option_name, main_event){
    

    if(event.checked == true){			// if checked event
      
      // this `for` is to make flag checked n the main list 
      for(let i = 0; i < this.sub_events_list[index].options.length; i++){
        if(this.sub_events_list[index].options[i].name == option_name){
          this.sub_events_list[index].options[i].checked = true;
        }  
      }

      let option_obj = {};
      option_obj['name'] = option_name;
      

     	if(this.selected_events.length > 0 ) {
        
            // to find if that event is already there, if there then 
            // u don't have to create seperate object for that event, 
            // just add that subevent option under that subevent 
            var found_event_index;
            found_event_index = this.find_event_index(main_event);

            // if found 
            if(found_event_index >= 0 ){
              this.selected_events[found_event_index].options.push(option_obj);
            } else { 			//if not found
              this.add_event(main_event,option_obj);
            }

      	} else {
			this.add_event(main_event,option_obj);
		}
      
    } else { 					// if unchecked event

        // this for is to make flag uncheck n the main list 
          for(let i = 0; i < this.sub_events_list[index].options.length; i++){
            if(this.sub_events_list[index].options[i].name == option_name){
              this.sub_events_list[index].options[i].checked = false;
            }  
          }

          var found_event_index;
          found_event_index = this.find_event_index(main_event);

          if(this.selected_events[found_event_index].options.length > 1){
            for(let i = 0; i < this.selected_events[found_event_index].options.length; i++){
              if(this.selected_events[found_event_index].options[i].name == option_name){
                this.selected_events[found_event_index].options.splice(i,1);
              }
            } 
          } else {
            this.selected_events.splice(found_event_index,1);
          }
    	}
  	}

    find_event_index(main_event){
      
      var found_index = this.selected_events.findIndex(ele => { 
          return ele.event === main_event.name;
        }
      );

      return found_index;
    }

  	add_event(main_event,option_obj){
      let event_obj = {};
      event_obj['event'] = main_event.name;
      event_obj['date'] = main_event.date;
      // event_obj['event'] = event_name;
      event_obj['options'] = [];
      event_obj['options'].push(option_obj);
      this.selected_events.push(event_obj);
	  }

    add_date(event){
     
      if(this.selected_events.length != 0){
        var index = this.find_event_index(event);
        this.selected_events[index]['date'] = event.date;
      } else{
        let event_obj = {};
        event_obj['event'] = event.name;
        event_obj['date'] = event.date;
        event_obj['options'] = [];
        this.selected_events.push(event_obj);
      }
    }

    go_back(){
      
      this.router.navigate(['main-menu']);
    }

    add_events(){
      this.is_selected_events = false;
    }

    confirm_events(){
      var message = 'Are sure you want to confirm the selected events and proceed to vendor selection?';
      var action_name = 'confirm'
      this.open_alert_box(message,action_name);
    }

    cancel_selections(){
      var message = 'Are sure you want to exit and clear data you have selected?';
      var action_name = 'cancel'
      this.open_alert_box(message,action_name);
    }


  open_alert_box(message,action_name) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '250px',
      data: {
        is_vendor_info : false,
        message: message
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result == 'okay'){
        if(action_name == 'cancel'){
          this.router.navigate(['main-menu']);
        } else if(action_name == 'confirm') {
          debugger;
          console.log(this.selected_events);
          this.router.navigate(['vendor/list']);
          // pass the arrray to vendor module
        }

      } else {
        return;
      }
        
    });
  }


}
