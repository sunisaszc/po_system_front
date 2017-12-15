import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserManagementService {

  headers: Headers;

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get("http://localhost:3000/api/user/getuser")
      .map((res) => res.json());
  }

  createNewUser(username, password, email, status) {

    let body = {
      "username": username,
      "email": email,
      "password": password,
      "status": status
    }

    return this.http.post("http://localhost:3000/api/user/signup", body)
      .map((res) => res.json());
  }

}