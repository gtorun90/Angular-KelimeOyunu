import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RegisterUser } from "../components/register/registerUser";
import { LoginUser } from "../components/login/loginUser";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  path = environment.path;
  TOKEN_KEY = "token";

  register(registerUser: RegisterUser): Observable<RegisterUser> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let postUrl = this.path + 'user/register'
    let postUrl = "user/register";
    return this.http.post<RegisterUser>(postUrl, registerUser, {
      headers,
    });
  }

  login(loginUser: LoginUser): Observable<LoginUser> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //let getUrl = this.path + "user/login";
    let getUrl = "user/login";
    return this.http.post<LoginUser>(getUrl, loginUser, { headers });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
