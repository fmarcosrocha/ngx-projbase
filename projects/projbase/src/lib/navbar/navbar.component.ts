import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Menu} from '../main-container/main-container.component';

export interface User {
  roles?: string[];
  avatarImage?: string;
  initial?: string;
  uri?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface Notification {
  total?: number;
  menus?: Menu[];
}

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(orientation: portrait)', '(orientation: landscape)',]).subscribe(result => {
      this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    });
  }

  public isSmallScreen = false;
  @Input() shrink = false;
  @Input() title = 'Title';
  @Input() subTitle1 = 'Subtitle 1';
  @Input() subTitle2 = 'Subtitle 2';
  @Input() subTitle3 = 'Subtitle 3';
  @Input() version = '0.0.0';
  @Input() label = 'Label';
  @Input() versions: any[] = [];
  @Input() notification: Notification = {};
  @Input() logged = false;
  @Input() showRoles = false;
  @Input() user!: User;
  @Input() showLogin = true;
  @Input() showMenu = true;

  @Output() openMenu = new EventEmitter();
  @Output() login = new EventEmitter();
  @Output() logoff = new EventEmitter();

  public getRoles(): string {
    const roles = (this.user?.roles) ? this.user.roles.reduce((acc: any, r: any) => acc + ' | ' + r, '') : '';
    return roles.slice(3);
  }

}
