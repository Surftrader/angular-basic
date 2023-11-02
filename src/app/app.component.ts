import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World from TS</h1>`,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: ['h1 {color: blue}']
})
export class AppComponent {
  title = 'angular-basic';
}
