class Wagon {

    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

   join(n){
        if(this.getAvailableSeatCount() > 0) {
             this.passengers.push(n)
        }
    }

    shouldQuarantine(){
        for(let i = 0; i < this.passengers.length; i++){
            if (this.passengers[i].isHealthy === false){
                return true
            }
            
        }
        return false
    }

    totalFood(){
        let totalFood = 0
        for (let i=0; i < this.travelers.length; i++){
            totalFood += this.travelers[i].food
        }
        return totalFood
    }


}

module.exports = Wagon;