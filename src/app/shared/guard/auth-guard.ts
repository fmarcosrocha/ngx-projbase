import {Injectable} from '@angular/core';
import {
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    protected readonly router: Router
  ) {
    // super(router);
  }

  // public isAccessAllowed = async (
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ) => {
    // if (!this.authenticated) {
      // await this.keycloak.login({
      //   redirectUri: window.location.origin + state.url,
      // });
    // }

    // const requiredRoles = route.data.roles;

    // if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
    //   return true;
    // }

    // const contains = requiredRoles.some(r => this.roles.indexOf(r) >= 0);
    // if (!contains) {
    //   alert('Usuário sem permissão para acessar este recurso!');
    // }
    // return contains;
  // }
}
