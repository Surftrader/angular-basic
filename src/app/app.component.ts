import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  isParagraphVisible: boolean = true;
  list: string[] = [
    'list one',
    'list two',
    'list three'
  ];

  show() {
    console.log('isParagraphVisible', this.isParagraphVisible);
  }
}
