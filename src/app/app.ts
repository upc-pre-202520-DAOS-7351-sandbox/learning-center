import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Layout} from './shared/presentation/components/layout/layout';

import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-center');

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
