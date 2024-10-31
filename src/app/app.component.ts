import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { SignalModelComponent } from './feature/angular/model-signal/signal-model/signal-model.component';
import { QueryViewComponent } from './feature/angular/signal-query/query-view/query-view.component';
import { SearchModule } from './feature/angular/signal-query/query-content/search/search.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SignalModelComponent,
    QueryViewComponent,
    SearchModule,
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
