import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from './loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginUser:any = {}
  ngOnInit() {
  }
  login(loginUser:LoginUser){
    this.authService.login(loginUser)
  }
}
