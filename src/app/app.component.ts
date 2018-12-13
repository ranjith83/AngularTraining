import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTraining';
showMessage: string;
  receiveMessage(msg: string) {
    console.log(msg);
    this.showMessage = msg;

  }
}
