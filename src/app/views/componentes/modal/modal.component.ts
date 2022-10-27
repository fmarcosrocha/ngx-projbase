import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  constructor(public _dialog: MatDialog) { }

  abrirModal(): void {
    const dialogRef = this._dialog.open(ModalExemploComponent, {
      width: '450px'
    })
  }
}

@Component({
  selector: 'app-modal-exemplo',
  templateUrl: 'modal-exemplo.component.html',
})
export class ModalExemploComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalExemploComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}