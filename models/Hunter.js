const Traveler = require("./Traveler")

class Hunter extends Traveler{

    constructor (name){
        super(name)
        this.food = 2
        this.isHealthy = true
    }

    hunt(){
        this.food += 5
    }

    eat(){
        if(this.food === 0){
            this.isHealthy = false
        }   

        if (this.food === 1){
            this.food = 0
            this.isHealthy = false
        }

        if (this.food >= 2) {
            this.food -= 2
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(this.food > numOfFoodUnits){
            traveler.food += numOfFoodUnits
        }
    }

}

module.exports = Hunter;