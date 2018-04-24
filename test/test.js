let assert = require('assert');
let shouty = require('../app.js');

let sean = new shouty.person('Sean', 0, '', '');
let lucy = new shouty.person('Lucy', 15, '', '');
let martin = new shouty.person('Mario', 18, '', '');

describe('Shouty', function () {
    describe('People in the 15 meter range', () => {
        it('should return distance from employee', () => {
            assert.equal(15, shouty.getDistance(sean, lucy));
        })
        it('should return the shouted message', () => {
            assert.equal('Free bagels!', shouty.shoutMessage('Free bagels!', sean, [lucy,martin]));
        })
        it('should return the heard message ', () => {
            assert.equal('Free bagels!', shouty.getHeardMessage(lucy));
        })
    });
    describe('People outside the 15 meter range', () => {
        it('should return empty heardMessage', () => {
            assert.deepEqual('', shouty.getHeardMessage(martin));            
        }) 
    })
})