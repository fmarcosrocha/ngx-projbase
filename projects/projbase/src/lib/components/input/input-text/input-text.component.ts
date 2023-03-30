import {Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';
import {
  AbstractControl, AsyncValidator,
  ControlContainer,
  ControlValueAccessor, FormControl, FormGroup, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {InputTextType} from '../../../directives/input-text-transform.directive';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {Observable} from 'rxjs';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
};

const INPUT_FIELD_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
};

const INPUT_FIELD_ASYNC_VALIDATORS: any = {
  provide: NG_ASYNC_VALIDATORS,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
};

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR, INPUT_FIELD_VALIDATORS]
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
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() required = false;
  @Input() showClearBtn = false;
  @Input() showCopyBtn = false;
  @Input() textType!: InputTextType;
  @Input() class = 'w-100 mat-form-field-label-out';

  touched = false;
  disabled = false;

  private innerValue!: string;
  private control!: AbstractControl | null | undefined;

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  get formGroup(): FormGroup {
    return this.formControl.parent as FormGroup;
  }

  get value(): string {
    return this.formControl?.value;
  }

  set value(value: string) {
    this.innerValue = value;
    this.onChange(this.innerValue);
  }

  onChange: (value: string) => void = () => {
  };
  onTouched: () => void = () => {
  };
  // controlContainer adicionado para recuperar o formGroup parent.
  // Sem ele o Angular não está conectando o component com o formGroup que ele está inserido.
  constructor(@Optional() @Host() @SkipSelf()
              private controlContainer: ControlContainer) {
    console.log(controlContainer);
  }

  ngOnInit() {
    if (this.controlContainer) {
      if (this.controlName) {
        this.control = this.controlContainer.control?.get(this.controlName);
        this.checkValidators();
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }
  }

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
    this.innerValue = value;
    this.onChange(value);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      // adicionado porque o onTouched não está atualizando o parentGroup.
      this.formGroup.markAsTouched();
      this.touched = true;
    }
  };

  clear = () => {
    this.innerValue = '';
    this.formControl.reset();
  };

  copy = () => {
    // copy content
  };

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    return control?.errors;
  }

  private checkValidators() {
    this.required = !!this.control?.errors?.required;
  }
}
