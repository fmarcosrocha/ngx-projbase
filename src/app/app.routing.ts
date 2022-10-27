import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  BreadcumbComponent,
  CardComponent,
  DatatableComponent,
  DateTimePickerComponent,
  InputComponent,
  ModalComponent,
  RadioButtonComponent,
  SelectComponent,
  ComoComecarComponent,
  SobreComponent,
  SsoComponent,
  NotificacaoComponent,
  ConsumindoArquiteturaComponent,
  InputFileComponent
} from 'app/views';
import { AuthGuard } from 'app/shared/guard/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'sobre', pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
  { path: 'como-comecar', component: ComoComecarComponent },
  { path: 'consumindo-arquitetura', component: ConsumindoArquiteturaComponent },
  { path: 'componentes', children: [
    { path: 'accordion', component: AccordionComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'breadcumb', component: BreadcumbComponent, data: { breadcrumb: 'Breadcumb', rota: "/componentes/breadcumb" } },
    { path: 'card', component: CardComponent },
    { path: 'data-table', component: DatatableComponent },
    { path: 'date-time-picker', component: DateTimePickerComponent },
    { path: 'input', component: InputComponent },
    { path: 'input-file', component: InputFileComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'radio-button', component: RadioButtonComponent },
    { path: 'select', component: SelectComponent },
    { path: 'notificacoes', component: NotificacaoComponent }
  ] },
  { path: 'sso', component: SsoComponent, canActivate: [AuthGuard], data: {roles: ['AdministradorProjetoBase']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRouting { }
