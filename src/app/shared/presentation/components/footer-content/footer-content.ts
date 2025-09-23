import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';

@Component({
  selector: 'app-footer-content',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './footer-content.html',
  styleUrl: './footer-content.css'
})
export class FooterContent {

}
