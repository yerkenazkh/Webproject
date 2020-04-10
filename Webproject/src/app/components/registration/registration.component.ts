import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
