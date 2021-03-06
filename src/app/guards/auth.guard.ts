import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.afUser$.pipe(
      map(user => !!user),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('access denied');
    return this.authService.afUser$.pipe(
      map((user) => !!user),
      take(1),
      tap((isLoggedin) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/welcome');
        }
      })
    );
  }
}
