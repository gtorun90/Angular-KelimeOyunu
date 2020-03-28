import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  path = environment.path
  TOKEN_KEY = "token"

  register(registerUser){
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type","application/json")
    // let postUrl = this.path + 'user/register'
    let postUrl ='user/register'
    return this.http.post(postUrl,
           registerUser,
           {headers:headers})
           .subscribe(data=>{
            console.log(data)
           })
  }
  login(loginUser){
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type","application/json")
    // let getUrl = this.path + 'user/login'
    let getUrl = 'user/login'
    return this.http.post(getUrl,
           loginUser,
           {headers:headers})
           .subscribe(data=>{
             this.saveToken(data['token'])
             console.log(data['token'])
           })
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token)

  }
  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
  }
  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }
  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
