import { Component } from '@angular/core';
import {FooterContent} from '../footer-content/footer-content';
import {HeaderContent} from '../header-content/header-content';

@Component({
  selector: 'app-layout',
  imports: [
    FooterContent,
    HeaderContent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
