import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking-options',
  templateUrl: './booking-options.component.html',
  styleUrls: ['./booking-options.component.scss']
})
export class BookingOptionsComponent implements OnInit {

  booking_option : string = '';
  event :  string = '';
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.event = this.route.snapshot.paramMap.get('event');
  }

  booking_options(){
    if(this.booking_option == 'app'){

      this.router.navigate(['main-menu/sub-event', {event : this.event}]);

    } else if(this.booking_option == 'appointment'){

      this.router.navigate(['main-menu/vendor' ]);

    }
  }

}
