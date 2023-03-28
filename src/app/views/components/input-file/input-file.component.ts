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
      this.uploadCtrl.error = 'Files must be in PNG or JPG format and have a maximum size of 100MB';
    },
    dropped: (files: any) => {
      this.uploadCtrl.error = 'Files must be in PNG or JPG format and have a maximum size of 100MB';
    }
  }
}
