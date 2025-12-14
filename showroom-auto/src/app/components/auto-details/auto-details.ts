import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-auto-details',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './auto-details.html',
  styleUrl: './auto-details.css'
})
export class AutoDetails {
  @Input() auto: Auto | null = null;
  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
