import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry , map} from 'rxjs/operators';

// import {  Response, Headers } from "@angular/common/http";

// import 'rxjs/add/operator/map';
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  test : string = "†esting here ";
  constructor(private http: HttpClient) { 
    console.log("connected ");
  }

  save_events(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    return this.http.post("http://localhost:4200/api/SaveEvents.php",{test : this.test});
  }


}
