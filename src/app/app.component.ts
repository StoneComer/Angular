import { Component } from '@angular/core';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  notiflix_alert(type: string) {
    switch (type) {
      case 'success':
        Notify.success('Success Alert');
        break;
      case 'warning':
        Notify.warning('Warning Alert');
        break;
      case 'error':
        Notify.failure('Error Alert');
        break;
      case 'info':
        Notify.info('Info Alert');
        break;
    }
  }
}
