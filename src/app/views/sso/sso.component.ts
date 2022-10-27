import {Component, ElementRef, OnInit} from '@angular/core';
import {UserDTO} from 'app/shared/dto/user-dto';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
})
export class SsoComponent implements OnInit {

  public isLoggedIn = false;
  public userDTO: UserDTO | null = null;

  constructor(private elementRef: ElementRef) {
  }

  async ngOnInit(): Promise<void> {
    // this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.preencherUserDTO();
    }
  }

  private preencherUserDTO = async () => {
    // const profile = await this.keycloak.loadUserProfile();
    // this.userDTO = new UserDTO();
    // this.userDTO.username = profile.username;
    // this.userDTO.email = profile.email;
    // this.userDTO.firstName = profile.firstName;
    // this.userDTO.lastName = profile.lastName;
    // this.userDTO.roles = this.keycloak.getUserRoles(false);
  }
}
