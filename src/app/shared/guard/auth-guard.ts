import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakService} from 'app/views/sso/keycloak.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authenticated = true;
  private roles: string[] = ['admin'];

  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authenticated) {
      this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    const requiredRoles = route.data.roles;

    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    const contains = requiredRoles.some(r => this.roles.indexOf(r) >= 0);
    if (!contains) {
      alert('User does not have access to this feature!');
    }
    return contains;
  }
}
