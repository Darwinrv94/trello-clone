import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary';

  get colors(): object {
    return {
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:bg-primary-300': this.color === 'primary',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:bg-success-300': this.color === 'success',
      'bg-red-700': this.color === 'danger',
      'hover:bg-red-800': this.color === 'danger',
      'focus:bg-red-300': this.color === 'danger',
      'bg-light-700': this.color === 'light',
      'hover:bg-light-800': this.color === 'light',
      'focus:bg-light-300': this.color === 'light',
    };
  }
}
