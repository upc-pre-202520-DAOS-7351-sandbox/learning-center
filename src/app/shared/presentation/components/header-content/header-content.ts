import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header-content',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, LanguageSwitcher],
  templateUrl: './header-content.html',
  styleUrl: './header-content.css'
})
export class HeaderContent {

}
