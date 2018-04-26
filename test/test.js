let assert = require('assert');
let shouty = require('../app.js');

let sean = new shouty.person('Sean', 0, '', '');
let lucy = new shouty.person('Lucy', 15, '', '');
let martin = new shouty.person('Mario', 18, '', '');
let bagel = new shouty.bread('Bagel');

describe('Shouty', function () {
    describe('meter range', () => {
        it('should return the max meter range', () =>{
            assert.equal(15, shouty.setRange(15));
        });
    });
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
    describe('Making the bread', () => {
        it('should return the ingredients', () => {
            assert.deepEqual({ 'flour': 1000, 'water': 600, 'salt': 20, 'yeast': 10 }, shouty.setIngredients(bagel, { 'flour': 1000, 'water': 600, 'salt': 20, 'yeast': 10 }));
        })
        it('should change state to dough', ()=> {
            assert.equal('dough', shouty.makeDough(bagel));
        })
        it('should set the amount of loaves', ()=> {
            assert.equal(2, shouty.setLoaves(bagel, 2));
        })
        it('should set baking time', () => {
            assert.equal(0.5, shouty.setBakingTime(bagel, 0.5));
        })
        it('should bake the bagels', () => {
            shouty.bakeBread(bagel).then((response) => {
                assert.equal('baked', response);           
            })
        })

    })
})