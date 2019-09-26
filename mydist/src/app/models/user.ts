export class User {

    username:String;
    avatar:String;

    constructor(username: String, avatar: String) {
        this.username = username;
        this.avatar = avatar
    }

    getUser() {
        return {
            username: this.username,
            avatar: this.avatar
        };
    }

}