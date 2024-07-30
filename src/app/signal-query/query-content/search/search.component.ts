import { Component, contentChild, effect } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private searchForm = contentChild.required(SearchFormComponent);

  constructor() {
    effect(() => {
      this.searchForm().searchField().nativeElement.focus();
      this.searchForm().searchField().nativeElement.value = 'texto por defecto';
    });
  }
}


//Comparación de consultas basadas en Signals con consultas basadas en decoradores
//Las consultas de Signals son un enfoque alternativo a las consultas declaradas mediante
//los decoradores @ContentChild, @ContentChildren, @ViewChild o @ViewChildren.

//El nuevo enfoque expone los resultados de la consulta como signals, lo que significa
//que los resultados de la consulta se pueden combinar con otras Signals
//(mediante el uso de un método computed o effect) y generar la detección de cambios.

//Además, el sistema de consultas basado en Signals ofrece otros beneficios:
// * Tiempo más predecible. Puede acceder a los resultados de la consulta tan pronto como estén disponibles.
// * Inferencia de tipos más precisa.
// * Angular actualiza los resultados de las consultas basadas en Signals de forma perezosa;
// El framework no funciona a menos que su código lea explícitamente los resultados de la consulta.
