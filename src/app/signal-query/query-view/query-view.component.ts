import { Component, ElementRef, OnInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-query-view',
  standalone: true,
  imports: [],
  template: `
        <br><strong>2. Expose queries as signals: Query VIEWS</strong><br>

        <p>Primero un div.</p>
        <div #elemento>Hola, soy el elemento HTML buscado</div>

        <p>Ahora, hacemos focus() en un Input.</p>
        <input type="search" id="search" #searchField autocomplete="false">
    `,
  styleUrl: './query-view.component.css'
})
export class QueryViewComponent implements OnInit{

  divElemento = viewChild<ElementRef>('elemento');

  // @ViewChild('searchField', { static: true }) searchField!: ElementRef<HTMLInputElement>;
  searchElemento = viewChild<ElementRef>('searchField');

  ngOnInit(): void {
    console.log('elemento::',this.divElemento()?.nativeElement.innerHTML);
    this.searchElemento()?.nativeElement.focus();
  }


}
