﻿import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}
from '@angular/router';
import {CookieOptionsArgs, CookieService} from "angular2-cookie/core";
import {CONSTANTS} from "../app.const";



@Injectable()
export class AuthGuard implements  CanActivate , CanActivateChild, CanLoad {
  constructor(private router: Router, private  _cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const token = this._cookieService.get(CONSTANTS.JWT.COOKIE_NAME);
    if (token) {
      return true;
    }
    const navigationExtras: NavigationExtras = {
      queryParams: { 'returnUrl': url }
    };

    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
