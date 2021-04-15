import { Component, OnInit } from '@angular/core';

import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  rating3 : number = 4;
  
  selected_events = [
    { 
      date: 'Tue Mar 23 2021 00:00:00 GMT+0530 (India Standard Time)',
      event: "Catering",
      options: [{name: "Veg"}]
    },

    { 
      date: 'Tue Mar 23 2021 00:00:00 GMT+0530 (India Standard Time)',
      event: "Decoration",
      options: [{name: "Flower"},{name: "Artificial"}]
    }
  ];

  vendor_list = [
    {name: 'suresh1', rating : '31'},
    {name: 'suresh2', rating : '32'},
    {name: 'suresh3', rating : '33'}
  ];

  clicked_index : any ;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { 
  }

  vendor_selected(i){
    this.clicked_index = i;
  }

  show_info(clicked_index){
   let  vendor_info_obj = this.vendor_list[clicked_index];
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      height: '500px',
      data: {
        is_vendor_info : true,
        vendor_info : vendor_info_obj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // once the user closes the details dialog 
    });

  }
}
