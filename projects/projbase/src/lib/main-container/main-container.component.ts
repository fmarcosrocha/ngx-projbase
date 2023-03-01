import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'lib-main-container',
  templateUrl: './main-container.component.html'
})
export class MainContainerComponent {

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  @Output() scrollTop = new EventEmitter();

  @ViewChild('drawer', { static: false }) sidenavRef!: any;
  @ViewChild('ProjBaseMainContent', { static: false }) ProjBaseMainContent!: any;

  @Input() menus: any[] = [];
  @Input() systemName = 'System Name';
  @Input() license = `ORG. LTDA - ${new Date().getFullYear()}`;
  public onScroll(evt: any): void {
    this.scrollTop.emit(evt.target.scrollTop);
  }

  public openMenu(): void {
    this.sidenavRef.toggle();
  }
}
