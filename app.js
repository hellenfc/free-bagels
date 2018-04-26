let shouty = {}
let meterRange;
const faker = require('faker');

shouty.person = class Person {
    constructor(name, position, shoutedMessage, heardMessage) {
        this.name = name;
        this.position = position;
        this.shoutedMessage = shoutedMessage;
        this.heardMessage = heardMessage;
    }
}

shouty.bread = class Bread {
    constructor(name, ingredients, state, loaves, bakingTime, breadDetail) {
        this.name = name;
        this.ingredients = ingredients;
        this.state = state;
        this.loaves = loaves;
        this.bakingTime = bakingTime;
        this.breadDetail = this.breadDetail;
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
    if (!bread.ingredients.yeast) {
        if (bread.breadDetail) {
            bread.breadDetail += 'Bread can not rise and be heavy. ';

        } else {
            bread.breadDetail = 'Bread can not rise and be heavy. ';
        }
    }
    if (!bread.ingredients.salt) {
        if (bread.breadDetail) {
            bread.breadDetail += 'Bread does not taste good. ';
        } else {
            bread.breadDetail = 'Bread does not taste good. ';
        }
    }
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
shouty.setBakingTime = (bread, minutes) => {
    bread.bakingTime = minutes;
    return bread.bakingTime;
}
shouty.bakeBread = (bread) => {
    return new Promise((resolve, reject) => {
        setTimeout((error) => {
            if (error) {
                reject(error);
            } else {
                if (bread.bakingTime > 1) {
                    bread.state = 'burn';
                    resolve(bread.state);
                } else {
                    bread.state = 'baked';
                    resolve(bread.state);
                }
            }
        }, bread.bakingTime * 60000);
    })
}

shouty.randomMessage = (length) => {
    let newMessage = faker.lorem.paragraphs();
    let messageArray = newMessage.split(' ');
    let lengthArray = messageArray.splice(0, length);
    console.log('Array', lengthArray.join(' '));
    return lengthArray.join(' ');
}

shouty.randomMessageWithWord = (word) => {
    let newMessage = faker.lorem.word()+ ' ' + word + ' ' + faker.lorem.words();
    console.log('message', newMessage)
    return newMessage;
}

shouty.newPerson = (distance) => {
    let person = new shouty.person(faker.name.firstName(), distance) 
    return person;
}
module.exports = shouty;