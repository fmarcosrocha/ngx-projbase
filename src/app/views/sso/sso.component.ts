import {Component, OnInit} from '@angular/core';
import {UserDTO} from 'app/shared/dto/user-dto';
import {KeycloakService} from 'app/views/sso/keycloak.service';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
})
export class SsoComponent implements OnInit {

  public isLoggedIn = false;
  public userDTO: UserDTO | null = null;

  constructor(private keycloak: KeycloakService) {
  }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      await this.setUserDTO();
    }
  }

  private setUserDTO = async () => {
    const profile = await this.keycloak.loadUserProfile();
    this.userDTO = new UserDTO();
    this.userDTO.username = profile.username;
    this.userDTO.email = profile.email;
    this.userDTO.firstName = profile.firstName;
    this.userDTO.lastName = profile.lastName;
    this.userDTO.roles = this.keycloak.getUserRoles(false);
  }
}
