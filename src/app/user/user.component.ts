import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private serverHttpService: ServerHttpService) { }
  ngOnInit(): void {
    this.getAllUser();
  }
  username!: string;
  password!: string;
  id!: any;
  errorMessage: string | undefined;
  isBlank: boolean | undefined;

  users: { id: number, username: string, password: string }[] = []
  getAllUser() {
    this.serverHttpService.getAllUser().subscribe(
      (res) => {
        this.users = res;
        console.log("----------------", this.users)
      }
    )
  }
  addUser() {
    if (!this.username || !this.password) {
      this.isBlank = true;
      this.errorMessage = 'Please enter both username and password';
      setTimeout(() => {
        this.isBlank = false;
      }, 3000);
    } else {
      const user = { id: 1, username: this.username, password: this.password };
      this.serverHttpService.addOrUpdateUser(user).subscribe(
        (res) => {
          console.log(res);
          this.getAllUser();
          this.clear();
          setTimeout(function () {
            alert("Thêm thành công!");
          }, 1000);
        }
      )
    }
  }
  onRowClick(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
  }
  clear() {
    this.id = null;
    this.username = "";
    this.password = "";
  }
  delete(id: any) {
    if (!this.id) {
      this.isBlank = true;
      this.errorMessage = 'Please click row to delete';
      setTimeout(() => {
        this.isBlank = false;
      }, 3000);
    }
    else {
      console.log("delete id: ", id)
      this.serverHttpService.deleteUserById(id).subscribe(() => {
        console.log("delete");
        this.getAllUser();
        this.clear();
        setTimeout(function () {
          alert("Xóa thành công!");
        }, 1000);
      }
      )
    }
  }
  update(id: any, username: any, password: any) {
    if (!this.id) {
      this.isBlank = true;
      this.errorMessage = 'Please click row to update';
      setTimeout(() => {
        this.isBlank = false;
      }, 3000);
    } else if (!this.username || !this.password) {
      this.isBlank = true;
      this.errorMessage = 'Please enter both username and password';
      setTimeout(() => {
        this.isBlank = false;
      }, 3000);
    } else {
      let user = { id, username, password }
      console.log(user);
      this.serverHttpService.addOrUpdateUser(user).subscribe(
        (res) => {
          console.log(res);
          this.getAllUser();
          this.clear();
          setTimeout(function () {
            alert("Thay đổi thành công!");
          }, 1000);
        }
      )
    }
  }
}
