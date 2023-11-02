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
  roles: any[] = [
    {
      role: 'admin',
      text: 'ADMIN'
    },
    {
      role: 'user',
      text: 'USER'
    },
    {
      role: 'customer',
      text: 'CUSTOMER'
    }
  ];


  show() {
    console.log('isParagraphVisible', this.isParagraphVisible);
  }
}
