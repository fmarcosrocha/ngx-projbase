import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent implements OnInit {

  @Input() label!: string;
  @Input() required = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
