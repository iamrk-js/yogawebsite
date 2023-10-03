import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserroleGuard implements CanActivate {
  // getUserRole !: string;
  constructor() {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let getUserRole: string = route.data['userRole']; // admin
    let getLoggeInUserRole: string = localStorage.getItem("userRole")! // user
    if (getUserRole.includes(getLoggeInUserRole)) {
      return true;
    } else {
      return false
    }

  }

}
