import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form/search-form.component';



@NgModule({
  declarations: [SearchComponent, SearchFormComponent],
  imports: [
    CommonModule, NgFor
  ],
  exports: [SearchComponent, SearchFormComponent]
})
export class SearchModule { }
