import { Injectable } from '@angular/core';
import { Messages } from './models/messages';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Messages = new Messages();

  constructor() { }

  generateMessages() {

    let msgs: Array<String> = [
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
      let message: Message = new Message(msgs[i], Date.now());
      this.messages.messages.push(message);
    }
  }

}
