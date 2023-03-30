import {Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor, FormControl, FormGroup, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {InputTextType} from '../../../directives/input-text-transform.directive';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextFieldComponent),
  multi: true
};

const INPUT_FIELD_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => InputTextFieldComponent),
  multi: true
};

const INPUT_FIELD_ASYNC_VALIDATORS: any = {
  provide: NG_ASYNC_VALIDATORS,
  useExisting: forwardRef(() => InputTextFieldComponent),
  multi: true
};

@Component({
  selector: 'lib-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR, INPUT_FIELD_VALIDATORS]
})
export class InputTextFieldComponent implements OnInit, ControlValueAccessor, Validator {

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
  @Input() maxLength: number | string = 255;
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
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChange(this.innerValue);
    }
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
    console.log('registerOnChange');
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    console.log('registerOnTouched');
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState');
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    console.log('writeValue');
    this.value = value;
  }

  markAsTouched() {
    console.log('markAsTouched');
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
