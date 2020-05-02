import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../Model/user';
import {ApiResponse} from '../Model/api-response';
import {User1} from '../Model/user1'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  

  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost/project-wtl/';
  login(loginData): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+ '/login.php', loginData);
  }
    createUser(user: User): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(this.baseUrl+'/insert.php', user);
    }

    createUser1(user1: User1): Observable<ApiResponse>{
      return this.http.post<ApiResponse>(this.baseUrl+'/insert1.php', user1);
    }
}
