const { Given, When, Then } = require("@cucumber/cucumber");
const { strictEqual } = require("assert");
const assert = require("assert");
const { medico, viajante, cacador} = require("../../app");

const Traveler = require("../../models/Traveler");

/**GIVEN */

Given('um Doctor de nome {string}', function (string) {
    medico.name = string
});


/**WHEN */

When('o Doctor curar um Traveler', function () {
   medico.heal(viajante)
  });

  When('o Doctor curar um Hunter', function () {
    medico.heal(cacador)
});



/**THEN */

Then('o Traveler deve seguir saudável', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Hunter deve seguir saudável', function () {
    assert.strictEqual(cacador.isHealthy, true)
});
