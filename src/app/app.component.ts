import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalModelComponent } from './model-signal/signal-model/signal-model.component';
import { QueryViewComponent } from './signal-query/query-view/query-view.component';
import { SearchModule } from './signal-query/query-content/search/search.module';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, SignalModelComponent, QueryViewComponent, SearchModule,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    provideImgixLoader("https://maciejwojcik.imgix.net")
  ]
})
export class AppComponent {
  title = 'Angular 17.2';
}
