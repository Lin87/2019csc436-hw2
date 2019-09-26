import { User } from './user';

export class Message {

    timestamp:Number;
    text:String;

    constructor(text: String, timestamp: number) {
        this.text = text;
        this.timestamp = timestamp;
    }

}