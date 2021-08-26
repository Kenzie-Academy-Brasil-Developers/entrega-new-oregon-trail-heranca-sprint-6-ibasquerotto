const Traveler = require("./models/Traveler")
const Wagon = require("./models/Wagon")
const Hunter = require("./models/Hunter")
const Doctor = require("./models/Doctor")

let viajante = new Traveler()
let carroca = new Wagon()
let cacador = new Hunter()
let medico = new Doctor()

module.exports = {
    viajante,
    carroca,
    cacador,
    medico,
}