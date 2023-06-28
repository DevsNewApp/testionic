import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Customer }   from './types';
import { Client }   from './types';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor( private _httpClient: HttpClient) { 

  }


  getActivity(customerID: string): Observable<Customer>{
    return this._httpClient.get<Customer>(API); //+"/id/"+ activityID);
  }
}
const API = "http://localhost:8080/api/customer/143628779";

