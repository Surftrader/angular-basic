import { Component } from '@angular/core';

export interface Role {
  role: string,
  text: string
}
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
  roles: Role[] = [
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

  getColor(user: Role): string {
    return user.role == 'admin' ? 'green' : user.role === 'user' ? 'blue' : 'red';
  }

  getDate() {
    return new Date();
  }
}
