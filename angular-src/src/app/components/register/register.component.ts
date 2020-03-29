import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { RegisterUser } from "./registerUser";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}
  registerUser: any = {};
  ngOnInit() {}
  register(registerUser: RegisterUser) {
    this.authService.register(registerUser).subscribe(data => {
      console.log(data);
    });
  }
}
