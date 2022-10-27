import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Breadcrumb, MjBreadcrumbService } from '../mjbreadcumb.service';

@Component({
  selector: 'mj-breadcumb',
  templateUrl: './mj-breadcumb.component.html'
})

export class MjBreadcumbComponent {
  constructor(
    private _breadcrumbService: MjBreadcrumbService,
    private _breakpointObserver: BreakpointObserver) {

    this.breadcrumbs$ = _breadcrumbService.breadcrumbs$;

    this._breakpointObserver.observe(['(orientation: portrait)', '(orientation: landscape)',]).subscribe(result => {
      this.isSmallScreen = _breakpointObserver.isMatched('(max-width: 599px)');
    });
  }

  breadcrumbs$: Observable<Breadcrumb[]>;
  public isSmallScreen: boolean = false;
}