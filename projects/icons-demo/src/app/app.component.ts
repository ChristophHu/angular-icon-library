import { Component } from '@angular/core';
import { icons } from 'projects/icons/src/lib/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'icons-demo'

  icons: { [key: string]: string } = icons
  names: any[] = Object.keys(icons)

  constructor() {

  }
}
