import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-head-bar',
  imports: [NgForOf],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css'
})
export class HeadBar {
  @Input() brands: string[] = [];
  @Output() onSelectBrand = new EventEmitter<string>();

  selectBrand(brand: string) {
    this.onSelectBrand.emit(brand);
  }
}
