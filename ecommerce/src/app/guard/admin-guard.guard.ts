import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.user$.pipe(
        map(res => {
          console.log(res);
          console.log(res.isAdmin);
          if(res.isAdmin ==true ) {
            return true;
          }
          else {
            console.log('Access denied');
          }
        }),
      );
    }
}
