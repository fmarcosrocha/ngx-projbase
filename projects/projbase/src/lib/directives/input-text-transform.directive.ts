import {Directive, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {StringUtil} from '../utils/string.util';

export type InputTextType = 'uppercase' | 'lowercase' | 'capitalized';

@Directive({
  selector: 'input[textTranform]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextTransformDirective),
      multi: true
    }
  ]
})
export class InputTextTransformDirective implements ControlValueAccessor {

  @Input() textTranform!: InputTextType;

  private onChange = (text: string) => {
  };

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('input', ['$event']) onInput = () => {
    this.onChange(this.setText(this.elementRef.nativeElement.value));
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // sonar
  }

  writeValue(text: string): void {
    this.setText(text);
  }

  private setText(text: string): string {
    const newText = this.transformText(text);
    this.elementRef.nativeElement.value = newText;
    return newText;
  }

  private transformText(text: string): string {
    if (!text) {
      return '';
    }
    if (!this.textTranform) {
      return text;
    }
    switch (this.textTranform) {
      case 'capitalized':
        return StringUtil.capitalize(text);
      case 'lowercase':
        return text.toLowerCase();
      case 'uppercase':
        return text.toUpperCase();
    }
  }
}
