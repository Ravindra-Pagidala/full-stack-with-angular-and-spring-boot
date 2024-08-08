import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,private router:Router ) { }
     
    //no use variables in constructor arg
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
       if(this.hardcodedAuthenticationService.isUserLoggedIn())
         return true;

        //should redirect to login page whenever we try to open other pages
      this.router.navigate(['login']);
      return false;
    }
    //above method returns boolean value
     
}
