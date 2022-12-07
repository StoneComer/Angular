import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zadanie2';
  date_now = new Date();
  num = Math.floor(Math.random() * (95 - 0 + 1)) + 0;
  array1 = [
    {
      name: '1 element'
    },
    {
      name: '2 element'
    },
    {
      name: '3 element'
    }
  ]
}
