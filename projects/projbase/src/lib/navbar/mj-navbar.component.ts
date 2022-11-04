import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mj-navbar',
  templateUrl: './mj-navbar.component.html'
})
export class MjNavbarComponent {
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(orientation: portrait)', '(orientation: landscape)',]).subscribe(result => {
      this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    });
  }

  public isSmallScreen = false;
  @Input() shrink = false;
  @Input() secretaria = 'Secretaria de Operações Integradas';
  @Input() sistema = 'MJSP';
  @Input() versao = '0.0.0';
  @Input() label = '';
  @Input() versoes: any[] = [];
  @Input() notificacao: any = {};
  @Input() logado = false;
  @Input() exibirRoles = false;
  @Input() usuario: any = null;
  @Input() exibirLogin = true;
  @Input() exibirMenu = true;

  @Output() abrirMenu = new EventEmitter();
  @Output() login = new EventEmitter();
  @Output() logoff = new EventEmitter();

  public getRoles(): string {
    const roles = (this.usuario?.roles) ? this.usuario.roles.reduce((acc: any, r: any) => acc + ' | ' + r, '') : '';
    return roles.slice(3);
  }

}
