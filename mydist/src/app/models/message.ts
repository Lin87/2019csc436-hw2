import { User } from './user';

export class Message {

    poster: User;
    timestamp:Date;
    text:String;

    constructor(poster: User, text: String, timestamp: Date) {
        this.poster = poster;
        this.text = text;
        this.timestamp = timestamp;
    }

}