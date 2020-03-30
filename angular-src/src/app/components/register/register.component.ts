import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { RegisterUser } from "./registerUser";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [AuthService]
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}
  registerUser: any = {};
  mesajTur;
  register(registerUser: RegisterUser) {
    this.authService.register(registerUser).subscribe(
      data => {
        this.mesajTur = "success";
      },
      error => {
        this.mesajTur = "error";
      }
    );
  }
}
