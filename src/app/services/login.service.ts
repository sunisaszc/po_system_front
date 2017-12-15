import { Injectable } from '@angular/core';
import { Http,RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'


import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private username
  headers: Headers;
  options: RequestOptions;
  

  constructor(private http: Http, private localSt: LocalStorageService) {
    const user = this.localSt.retrieve('login');
    if (user != null)
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;

  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }


  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  login(username, password) {

    let body = {
      "username": username,
      "password": password
    }

    return this.http.post("http://localhost:3000/login", body)
      .map((res) => res.json());
  }


  googleOAuth(){
    
    return this.http.get("http://localhost:3000/oauth/google")
    .map((res) => res.json());
  }
}
