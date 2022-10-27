import { Component } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html'
})

export class InputFileComponent {
  constructor() { }

  public uploadCtrl = {
    error: '',
    upload: (evt: any) => {
      this.uploadCtrl.error = 'Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB';
    },
    dropped: (files: any) => {
      this.uploadCtrl.error = 'Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB';
    }
  }
}