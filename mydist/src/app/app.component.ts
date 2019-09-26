import { Component } from '@angular/core';
import { Messages } from './models/messages';
import { MessagesService } from './messages.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mydist';
  messages: Messages;

  constructor(private _msgService: MessagesService) {
    _msgService = new MessagesService();
    this.messages = _msgService.generateMessages();
    // for(var i = 0; i < this.messages.messages.length; i++) {
    //   console.log(this.messages.messages[i]);
    // }
  }

}
