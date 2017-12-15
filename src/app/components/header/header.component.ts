import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLogin;    //check ว่า login ไหม ถ้า login จะ show header
  private username: string;
  private password: string;
  private result_text: string;
  private name: string;

  constructor(private loginService: LoginService, private localSt: LocalStorageService, private router: Router) {
    
  }


  ngOnInit() {
    const user = this.localSt.retrieve('login');
    if (user != null)
      this.name = `${user.firstName}`
  }

  login(username, password) {
    this.loginService.login(username, password).subscribe((response) => {
      if (response != null) {
        this.loginService.setUserLoggedIn();
        console.log("Logging in ...");
        this.localSt.store('login', response);
        this.router.navigate(['/']);
        document.getElementById("myLogin").click();
      } else {
        this.result_text = "incorrect username or password!";
        console.log("Failed");
      }
    })
    return false;
  }

  loginOAuth() {
    console.log("click");
    this.loginService.googleOAuth().subscribe((response)=>{
      if (response != null) {
        this.loginService.setUserLoggedIn();
        console.log("Logging in ...");
        this.localSt.store('login', response);
        this.router.navigate(['/']);
        document.getElementById("myLogin").click();
      }
    })
  }

  logOut() {
    this.loginService.setUserLoggedOut();
    this.localSt.clear();
    this.router.navigate(['/']);
  }

}
