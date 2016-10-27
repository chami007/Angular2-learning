import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';

@Component({
  selector: 'fau-dropdown-custom-directive',
  templateUrl: './dropdown-custom-directive.component.html',
  styles: [],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DropdownCustomDirectiveComponent }
  ]
})
export class DropdownCustomDirectiveComponent implements ControlValueAccessor {

  @Input() items: string[];

  selectedItem: string;
  _onChange: (value: any) => void;

  constructor() { }

  writeValue(value: any) {
    this.selectedItem = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() { }

  onSelect(item: string) {
    this.selectedItem = item;
    this._onChange(item);
  }

}
