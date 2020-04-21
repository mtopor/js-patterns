class Server {
    constructor(api, port) {
        this.ip = api;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAws = true;
    server.awsInfo = function () {
        return server.url;
    };

    return server;
}

function asure(server) {
    server.isAsure = true;
    server.port += 500;

    return server;
}

const s1 = aws(new Server('12.12.23.255', 8080));
console.log(s1.isAws);
console.log(s1.awsInfo());

const s2 = asure(new Server('22.33.4.23', 1500));
console.log(s2.isAsure);
console.log(s2.url);