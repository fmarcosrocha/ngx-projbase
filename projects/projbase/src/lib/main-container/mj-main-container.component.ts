import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'mj-main-container',
  templateUrl: './mj-main-container.component.html'
})
export class MjMainContainerComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  
  @Output() scrollTop = new EventEmitter();
  public onScroll(evt: any) {
    this.scrollTop.emit(evt.target.scrollTop)
  }

  @ViewChild('drawer', { static: false }) sidenavRef!: any;
  @ViewChild('mjMainContent', { static: false }) mjMainContent!: any;
  
  public abrirMenu() {
    this.sidenavRef.toggle();
  }

  @Input() menus: any[] = [];
  @Input() sistema: string = 'Identidade visual';
  @Input() licenca: string = `MJSP - ${new Date().getFullYear()}`;
}
