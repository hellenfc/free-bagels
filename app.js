let shouty = {}
let meterRange; 
shouty.person = class Person {
    constructor(name, position, shoutedMessage, heardMessage) {
        this.name = name;
        this.position = position;
        this.shoutedMessage = shoutedMessage;
        this.heardMessage = heardMessage;
    }
}

shouty.getDistance = (employee, client) => {
    return (client.position - employee.position);
}

shouty.shoutMessage = (message, employee, clients) => {
    employee.shoutedMessage = message;
    for (let i = 0; i < clients.length; i++) {
        if (shouty.getDistance(employee, clients[i]) <= meterRange) {
            clients[i].heardMessage = employee.shoutedMessage;
        }
    }
    return employee.shoutedMessage;
}

shouty.getHeardMessage = (client) => {
    return client.heardMessage;
}

shouty.setRange = (range) => {
    meterRange = range;
    return meterRange;
}

module.exports = shouty;