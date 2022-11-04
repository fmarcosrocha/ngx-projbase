import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from 'app/app.routing';

import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  CardComponent,
  DatatableComponent,
  DateTimePickerComponent,
  InputComponent,
  InputFileComponent,
  ModalComponent,
  ModalExemploComponent,
  RadioButtonComponent,
  SelectComponent,
  ComoComecarComponent,
  SobreComponent,
  ConsumindoArquiteturaComponent,
  NotificacaoComponent,
  SsoComponent,
  BreadcumbComponent
} from 'app/views';
import { MaterialModule } from 'app/components';
/* em desenvolvimento pode usar assim, para nao precisar efetuar o build da lib */
import { ProjBaseModule } from '../../projects/projbase/src/public-api';
/* em build da lib, fazer assim... */
// import { ProjBaseModule } from 'projbase';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AvatarComponent,
    BreadcumbComponent,
    ButtonComponent,
    CardComponent,
    DatatableComponent,
    DateTimePickerComponent,
    InputComponent,
    InputFileComponent,
    ModalComponent,
    ModalExemploComponent,
    RadioButtonComponent,
    SelectComponent,
    ComoComecarComponent,
    SobreComponent,
    ConsumindoArquiteturaComponent,
    NotificacaoComponent,
    SsoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    ProjBaseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ProjBaseModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
