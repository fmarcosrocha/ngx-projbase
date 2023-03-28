import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class KeycloakService {
  isLoggedIn(): Promise<boolean> {
    return Promise.resolve(true);
  }

  async loadUserProfile(): Promise<any> {
    return Promise.resolve({
      username: 'username',
      firstName: 'firstName',
      email: 'email',
      lastName: 'lastName'
    });
  }

  getUserRoles(all: boolean): string[] {
    return all ? ['admin', 'showMeTheMoney'] : ['admin'];
  }

  async login(param: { redirectUri: string }): Promise<void> {
    console.log('redirect to: ', param.redirectUri);
    return Promise.resolve();
  }
}
