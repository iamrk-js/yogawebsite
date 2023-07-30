import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yoga';
  isLogedIn : boolean = true;
  isLoading !: boolean;
  @ViewChild("sidenav") sidenav:any
  constructor(
    private _authService : AuthService,
     private _router : Router,
     private _loaderService : LoaderService){

  }
  ngOnInit(): void {
    this._authService.logInStatus.subscribe(res => {
      this.isLogedIn = res
    })
    this._loaderService.loadingStatus.subscribe(res => {
      this.isLoading = res;
    })
  }
  logOut(){
    this._authService.logout()
    .then(() => {
      this._router.navigate(['/'])        
    })
    .catch((error) => {
      // Handle logout error
    });
  }

  toggleSideNav(){
    this.sidenav.open()
  }
}
