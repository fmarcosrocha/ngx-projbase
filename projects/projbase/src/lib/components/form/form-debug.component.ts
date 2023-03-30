import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'lib-form-debug',
    template: `
        <ng-container *hideInProd="environment">
            <div style="background-color: #dcb5b5; margin: 20px 0 0; padding: 5px 20px 5px;" *ngIf="formGroup">
                <div>
                    <strong>FORM STATE:</strong>&nbsp;&nbsp;
                    valid: <strong>{{ formGroup.valid }}</strong> &nbsp;
                    touched: <strong>{{ formGroup.touched }}</strong> &nbsp;
                    pristine: <strong>{{ formGroup.pristine }}</strong> &nbsp;
                    dirty: <strong>{{ formGroup.dirty }}</strong>
                </div>
                <br>
                <pre>{{ formGroup.getRawValue() | json }}</pre>
                <br/>
                <br/>
                <small>VISIBLE ONLY IN LOCAL ENV.</small>
            </div>
        </ng-container>
    `
})
export class FormDebugComponent {
    @Input() formGroup!: FormGroup;
    @Input() environment!: any;
}
