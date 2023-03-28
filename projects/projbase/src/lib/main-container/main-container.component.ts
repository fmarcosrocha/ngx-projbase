import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

export interface Menu {
  title: string;
  uri?: string;
  icon?: string;
  menus?: Menu[];
}

@Component({
  selector: 'lib-main-container',
  templateUrl: './main-container.component.html'
})
export class MainContainerComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Output() scrollTop = new EventEmitter();

  @ViewChild('drawer', {static: false}) sidenavRef!: any;
  @ViewChild('ProjBaseMainContent', {static: false}) ProjBaseMainContent!: any;

  @Input() menus: Menu[] = [];
  @Input() systemName = 'System Name';
  @Input() license = `License - ${new Date().getFullYear()}`;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  public onScroll(evt: any): void {
    this.scrollTop.emit(evt.target.scrollTop);
  }

  public openMenu(): void {
    this.sidenavRef.toggle();
  }
}
