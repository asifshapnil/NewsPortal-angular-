import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  // tslint:disable-next-line:quotemark
  canActivate(_route: import('@angular/router').ActivatedRouteSnapshot, _state: import('@angular/router').RouterStateSnapshot): boolean | import ("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return !this.token.loggedIn();
  }

  constructor(private token: TokenService) { }

}
