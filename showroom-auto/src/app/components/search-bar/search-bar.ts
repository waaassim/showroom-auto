import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';
import { CurrencyPipe, NgClass, NgStyle, NgForOf, NgIf } from '@angular/common';


@Component({
  selector: 'app-search-bar',
  imports: [CurrencyPipe, NgClass, NgStyle, NgForOf, NgIf],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  private _autos: Auto[] = [];

  @Input()
  set autos(v: Auto[]) {
    this._autos = v || [];
    this.selectedAutos = this._autos.slice();
  }

  get autos(): Auto[] {
    return this._autos;
  }

  private _filterBrand = '';
  @Input()
  set filterBrand(v: string) {
    this._filterBrand = v || '';
    this.selectAutoList(this._filterBrand);
  }
  get filterBrand(): string {
    return this._filterBrand;
  }

  @Output() onSelectAuto = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];

  selectAutoList(brand: string) {
    if (!brand) {
      this.selectedAutos = this.autos.slice();
      return;
    }
    const b = brand.toLowerCase();
    this.selectedAutos = this.autos.filter((x) => x.brand.toLowerCase().startsWith(b));
  }

showDetails(auto:Auto){
  this.onSelectAuto.emit(auto)
}

autoTitleStyle(auto:Auto){
  if(auto.power>=10)
    return {'color':'red'}
  else
    return {'color':'black'}
}
}
