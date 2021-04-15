import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data ){}

    images = [
      {path: 'assets/images/vendor1.jpeg'},
      {path: 'assets/images/user.png'},
      {path: 'assets/images/vendor.jpeg'},
      {path: 'assets/images/vendor1.jpeg'},
      {path: 'assets/images/user.png'},
      {path: 'assets/images/vendor.jpeg'},
    
    ]
  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close('cancel');
  }

  okay(){
    this.dialogRef.close('okay');
  }

}
