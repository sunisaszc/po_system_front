import { Component, OnInit } from '@angular/core';

import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private userManagementService: UserManagementService) { }

  private userList: User[];
  private status: string;
  private respone;


  ngOnInit() {
    this.status = "user";
    this.getAllUser();
  }

  getAllUser() {
    this.userManagementService.getAllUser().subscribe((response) => {
      this.userList = response;
    });
  }

  addUser(username, password, email) {
    this.userManagementService.createNewUser(username, password, email, this.status).subscribe((response) => {
      this.respone = response;
      this.getAllUser();
    });
  }



}

interface User {
  username: string;
  email: string;
  password: string;
  status: string;
}