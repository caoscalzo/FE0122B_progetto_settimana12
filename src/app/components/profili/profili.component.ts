import { Component, OnInit } from '@angular/core';
import { NetflixService } from 'src/app/netflix.service';
import { Profili } from 'src/app/models/profili';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.scss']
})
export class ProfiliComponent implements OnInit {


  user$ = this.auth.user$
  constructor(private auth:AuthService) { }

   ngOnInit(): void {
    // this.userLog = await this.srvNet.getUser().toPromise()
    // this.arrUser = this.userLog
    // console.log(this.arrUser);

 }

}
