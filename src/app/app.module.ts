import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { FilmComponent } from './components/film/film.component';
import { AuthGuard } from './auth/auth.guard';
// import { NgForm } from '@angular/forms';
 //import { LoginComponent } from './auth/components/login/login.component';
// import { RegistrationComponent } from './auth/components/registration/registration.component';
 import { AuthRoutingModule } from './auth/auth-routing.module';
 import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ProfiliComponent } from './components/profili/profili.component';
import { CardComponent } from './components/card/card.component';




const routes:Route[] = [
  {
    path:'',
    component: FilmComponent, canActivate:[AuthGuard]
  },
  {
    path:'profili',
    component: ProfiliComponent, canActivate:[AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    ProfiliComponent,
    CardComponent,

     //LoginComponent,
    // RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthModule,


     AuthRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
