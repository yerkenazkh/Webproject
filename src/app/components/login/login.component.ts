import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public userModel = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userModel)
    this.userService.Login(this.userModel)
  }
}
