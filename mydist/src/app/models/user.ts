export class User {

    username: string;
    avatar: string;

    constructor(username: string, avatar: string) {
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