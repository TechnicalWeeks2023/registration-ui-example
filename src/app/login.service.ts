import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { User } from "../app/user";  
import { Observable } from 'rxjs';
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  JavaUrl : string;
  NetUrl : string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.JavaUrl = 'http://localhost:8081/magic-java-be/users';
    this.NetUrl = 'https://localhost:5001/Api/User';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  GetAllUsers(): Observable<User[]>{  
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*' }) };    
    return this.http.get<User[]>(this.NetUrl,httpOptions);  
  }  
  CreateUser(user:User){  
    debugger; 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<User[]>(this.JavaUrl, user, httpOptions)  
  }  
}  
