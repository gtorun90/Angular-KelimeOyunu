import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router"
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppComponent } from "./app.component";
import { HarfComponent } from "./components/harf/harf.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { GameComponent } from './components/game/game.component';
import { SoruBankasiComponent } from './components/soru-bankasi/soru-bankasi.component';
// import {AuthGuard} from "./guards/auth.guard"
var routes = [
  {path:"",component:GameComponent,pathMatch:"full"},
  {path:"home",component:GameComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"question",component:SoruBankasiComponent}
]

@NgModule({
  declarations: [
      AppComponent, 
      HarfComponent, 
      LoginComponent, 
      RegisterComponent, 
      GameComponent, 
      SoruBankasiComponent
  ],
  imports: [
     BrowserModule, 
     BrowserAnimationsModule, 
     FormsModule,
     HttpClientModule,
     RouterModule.forRoot(routes)

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
