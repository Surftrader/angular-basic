import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  isParagraphVisible: boolean = false;

  show() {
    console.log('isParagraphVisible', this.isParagraphVisible);
  }
}
