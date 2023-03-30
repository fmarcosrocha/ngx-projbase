import {Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor, FormControl, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {InputTextType} from '../../../directives/input-text-transform.directive';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() controlName = '';
  @Input() label = '';
  @Input() color: ThemePalette;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() type = 'text';
  @Input() id = '';
  @Input() name = '';
  @Input() title = '';
  @Input() tooltip = '';
  @Input() readonly = false;
  @Input() showClearBtn = false;
  @Input() showCopyBtn = false;
  @Input() textType!: InputTextType;

  touched = false;
  disabled = false;
  required = false;

  private _value!: string;
  private control!: AbstractControl | null | undefined;

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  get formGroup(): FormGroup {
    return this.formControl.parent as FormGroup;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(this._value);
  }

  constructor(@Optional() @Host() @SkipSelf()
              private controlContainer: ControlContainer) {
    console.log(controlContainer)
  }

  ngOnInit() {
    if (this.controlContainer) {
      if (this.controlName) {
        this.control = this.controlContainer.control?.get(this.controlName);
        this.required = !!this.control?.errors?.required;
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }
  }

  onChange = (value: string) => {};

  onTouched = () => {
  };

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this._value = value;
    this.onChange(value);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  };

  clear = () => {
    this._value = '';
  };

  copy = () => {
    // copy content
  };

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return !control.value && this.required ? {required: true} : null;
  }

}
