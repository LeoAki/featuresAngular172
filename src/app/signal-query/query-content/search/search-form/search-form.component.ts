import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {
  searchField = viewChild.required<ElementRef<HTMLInputElement>>('searchField');
}
