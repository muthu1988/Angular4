import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Demo App';
  master = 'Master';
  messageFromChild= "";

  getMessage(msg: string) {
    this.messageFromChild = msg;
  }

}
