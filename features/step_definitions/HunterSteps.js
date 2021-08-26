const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { cacador, viajante} = require("../../app");

const Traveler = require("../../models/Traveler");


/**GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string
});

Given('sabendo que ele sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int
});

Given('sempre começa a viagem saudável.', function () {
    cacador.isHealthy = true
});


/**WHEN */

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let i = 0; i < int; i++){
        cacador.eat()
    }
});

When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let j = 0; j < int; j++){
        cacador.hunt()
    }
});

When('o Hunter der comida para {int} Traveler', function (int) {
    for (let k = 0; k < int; k++){
        cacador.giveFood(viajante, 1)
    }
});

/**THEN */

Then('a quantidade de refeição deverá ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
    });

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
  });

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)    
});