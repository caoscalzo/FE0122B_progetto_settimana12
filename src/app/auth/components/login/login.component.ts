import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false
  constructor(private authSrv:AuthService, private router:Router) {}



  ngOnInit(): void {
  }
  async accedi(form: NgForm) {
    this.isLoading = true
    console.log(form.value);
    try {
      await this.authSrv.login(form.value).toPromise()
      this.isLoading = false
      this.router.navigate([''])
    } catch (error) {
      this.isLoading = false
      form.reset();
      alert(error);
      console.error(error)
    }
  }
}
