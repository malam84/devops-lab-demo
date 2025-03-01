import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { SignupRequest } from '../models/signup-request';
import { SignupResponse } from '../models/signup-response';
import { ConfigService } from '../../assets/ConfigService.service';

//const BASE_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  BASE_URL: string

  constructor(private http: HttpClient, private appConfig: ConfigService) 
  { 
      this.BASE_URL = this.appConfig._apiUrl;
      console.log("this.BASE_URL////////");
      console.log(this.BASE_URL);
  }
 
  doLogin(request: LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BASE_URL + "/doLogin", request);
  }

  dashboard(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + "/dashboard");
  }

  doRegister(request: SignupRequest):Observable<SignupResponse> {
    return this.http.post<SignupResponse>(this.BASE_URL + "/doRegister", request);
  }
}
