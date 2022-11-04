import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjBaseRouting } from './proj-base-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MjFooterComponent } from './footer/mj-footer.component';
import { MjBreadcumbComponent } from './breadcumb/mj-breadcumb.component';
import { MjFileDropDirective } from './file-drop-directive/mj-file-drop.directive';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreadcrumbService } from './breadcumb.service';

const materialComponentes = [
  ProjBaseRouting,
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatMenuModule,
  MatChipsModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    MainContainerComponent,
    NavbarComponent,
    MjFooterComponent,
    MjBreadcumbComponent,
    MjFileDropDirective
  ],
  imports: materialComponentes,
  exports: [
    MainContainerComponent,
    NavbarComponent,
    MjFooterComponent,
    MjBreadcumbComponent,
    MjFileDropDirective
  ],
  providers: [
    BreadcrumbService
  ]
})
export class ProjBaseModule { }
