import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  constructor(public _dialog: MatDialog) { }

  openModal(): void {
    const dialogRef = this._dialog.open(ModalExampleComponent, {
      width: '450px'
    });
  }
}

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalExampleComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
