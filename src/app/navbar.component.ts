import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-danger">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Parmi_TV</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Film</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/profili']"
                routerLinkActive="active"
                >Profili</a
              >
            </li>
            <li class="nav-item">
              <button id="bottone" type="button" (click)="logout()">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private autoSrv : AuthService) {}

  ngOnInit(): void {}

  logout(){
    this.autoSrv.logout()
  }
}
