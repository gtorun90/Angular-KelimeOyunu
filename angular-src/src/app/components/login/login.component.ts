import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { LoginUser } from "./loginUser";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  loginUser: any = {};
  mesajTur;
  ngOnInit() {}
  login(loginUser: LoginUser) {
    this.authService.login(loginUser).subscribe(
      data => {
        this.authService.saveToken(data["token"]);
        this.mesajTur = "success";
        setTimeout(() => {
          this.router.navigate(["/game"]);
        }, 4000);
      },
      error => {
        this.mesajTur = "error";
      }
    );
  }
}
