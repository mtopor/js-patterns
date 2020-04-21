class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${(from.name)} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message,from);
                }
            })
        }
    }
}

const bran = new User('Bran');
const sansa = new User('Sansa');
const arya = new User('Arya');

const room = new ChatRoom();
room.register(bran);
room.register(sansa);
room.register(arya);

bran.send('Hello!', arya);
sansa.send('Sup?!', bran);