const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { viajante } = require("../../app");


/**GIVEN */

Given('um Traveler de nome {string}', function (string) {
    viajante.name = string
});

Given('que ele sempre começa a viagem com {int} refeição', function (int) {
    viajante.food = int
});

Given('que ele sempre começa a viagem saudável.', function () {
    viajante.isHealthy = true
});

/**WHEN */

When('o Traveler sair para caçar {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        viajante.hunt()
    }
});


When('o Traveler parar para comer {int} vezes', function (int) {
    // When('o Traveler parar para comer {float} vezes', function (float) {
        for(let j = 0; j < int; j++){
            viajante.eat()
        }
});

When('o traveler parar para comer {int} vezes', function (int) {
    
});

/**THEN */

Then('a quantidade de refeições deverá ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int);    
});

Then('o Traveler não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true);
});

Then('o Traveler ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false);
});