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

shouty.bread = class Bread {
    constructor(name, ingredients, state, loaves, bakingTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.state = state;
        this.loaves = loaves;
        this.bakingTime = bakingTime;
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

shouty.setIngredients = (bread, ingredients) => {
    bread.ingredients = ingredients;
    return bread.ingredients;
}

shouty.makeDough = (bread) => {
    bread.state = 'dough';
    return bread.state;
}

shouty.setLoaves = (bread, loaves) => {
    bread.loaves = loaves;
    return bread.loaves;
}
shouty.setBakingTime=(bread, minutes) => {
    bread.bakingTime = minutes;
    return bread.bakingTime;
}
shouty.bakeBread = (bread) => {
    return new Promise((resolve, reject) => {
        setTimeout((error) =>{
            if (error) {
                reject(error);
            } else {
                bread.state = 'baked';
                resolve(bread.state);
            }
        }, bread.bakingTime * 60000);
        
    })
}

module.exports = shouty;