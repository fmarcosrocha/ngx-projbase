import { Directive, HostListener, Output, EventEmitter, HostBinding } from "@angular/core";

@Directive({
  selector: "[mjFileDrop]"
})

export class MjFileDropDirective {
  @Output() files: EventEmitter<any[]> = new EventEmitter();
  
  @HostBinding("style.background") private background = "#fff";
  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#f0fff1";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#fff";
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';

    let files = [];

    if (!evt.dataTransfer) {
      return;
    }

    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      files.push(file);
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}