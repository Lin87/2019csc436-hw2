import { Injectable } from '@angular/core';
import { Messages } from './models/messages';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageBox: Messages = new Messages();

  constructor() { }

  generateMessages() {

    let msgs: Array<string> = [
      "Woo Hoo",
      "Don't have a cow, man!",
      "Why you little...",
      "Eat my shorts!",
      "Hmm...",
      "I didn't do it.",
      "If anyone wants me, I'll be in my room.",
      "(Pacifier Suck)"
    ];

    for (var i = 0; i < msgs.length; i++) {
      let message: Message = new Message(msgs[i], (Date.now() - ((msgs.length - i) * 110000)));
      this.messageBox.messages.push(message);
    }

    return this.messageBox;

  }

}
