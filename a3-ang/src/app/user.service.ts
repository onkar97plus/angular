import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL= "http://34.217.50.68:30001/fetch"; 
  private baseUr = "http://34.217.50.68:30001/accept";
  constructor(private httpClient: HttpClient) {}

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user:any): Observable<Object>{
    return this.httpClient.post(`${this.baseUr}`, user);
  }

}
