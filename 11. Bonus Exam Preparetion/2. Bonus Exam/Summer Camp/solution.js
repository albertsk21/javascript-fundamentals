class SummerCamp{
    constructor(organizer,location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child : 150,
            student : 300,
            collegian : 500
        }
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money){
        if(condition !== "child" && condition !== "student" && condition !== "collegian"){
            throw new Error("Unsuccessful registration at the camp.");
        }
        if(this.getParticipant(name) !== false){
            return `The ${name} is already registered at the camp.`;
        }
        if(!this.checkHaveMoney(money,condition)){
            return "The money is not enough to pay the stay at the camp.";
        }
        let participant = {
            name : name,
            condition : condition,
            power : 100,
            wins : 0,
        }
        this.listOfParticipants.unshift(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        if(!this.getParticipant(name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.removeParticipantByName(name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2){

        let output ;
        if(typeOfGame === "WaterBalloonFights"){
           output = this.playWaterBalloonFights(participant1,participant2);
        }else if(typeOfGame === "Battleship"){
           output =  this.playBattleship(participant1);
        }

        return output;

    }
    toString(){

        let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`

        if(this.listOfParticipants.length !== 0){
            for (let i = 0; i <this.listOfParticipants.length ; i++) {
                let currentParticipant = this.listOfParticipants[i];
                if(!currentParticipant.win){
                    currentParticipant.win = 0;
                }
                output += `\n${currentParticipant.name} - ${currentParticipant.condition} - ${currentParticipant.power} - ${currentParticipant.win}`;
            }
        }
        return output;
    }
    playBattleship(participant){
        let nameOfTheGame = "Battleship";

        if(this.getParticipant(participant) === false){
            throw new Error("Invalid entered name/s.");
        }

        let player = this.getParticipant(participant);

        if(player !== false){
            player.power = player.power + 20;
        }

        return `The ${player.name} successfully completed the game ${nameOfTheGame}.`;
    }
    playWaterBalloonFights(participant1,participant2){
        let nameOfTheGame = "WaterBalloonFights";
        let output = "";
        let playerOne = this.getParticipant(participant1);
        let playerTwo = this.getParticipant(participant2);

        if( playerOne === false && playerTwo === false){
            throw new Error("Invalid entered name/s.");
        }
        if(!this.checkTwoCondition(playerOne.condition,playerTwo.condition)){
            throw new Error("Choose players with equal condition.");
        }

        if(playerOne !== false && playerTwo !== false ){

            let powerOne = playerOne.power;
            let powerTwo = playerTwo.power;

            if(powerOne > powerTwo){

                if(!playerOne.win){
                    playerOne.win = 1
                }else{
                    playerOne.win = playerOne.win + 1;

                }
               output = `The ${playerOne.name} is winner in the game ${nameOfTheGame}.`;
            }else if(powerOne < powerTwo){


                if(!playerTwo.win){
                    playerTwo.win = 1;
                }else{
                    playerTwo.win = playerTwo.win + 1;
                }
               output = `The ${playerTwo.name} is winner in the game ${nameOfTheGame}.`;
            }else{
                output = `There is no winner.`;
            }


        }

        return output;
    }
    checkTwoCondition(condition1,condition2){


        if(condition1 === "child" && condition2 === "child"){
            return true;
        }else if(condition1 === "student" && condition2 === "student"){
            return true;
        }else if(condition1 === "collegian" && condition2 === "collegian"){
            return true;
        }

        return false;
    }
    removeParticipantByName(name){
        for (let i = 0; i < this.priceForTheCamp.length ; i++) {
            if(this.listOfParticipants[i].name === name){
                this.listOfParticipants.splice(i,1);
                break;
            }

        }
    }
    checkHaveMoney(money, condition){
        if(condition === "child"){
            if(money < this.priceForTheCamp.child){
                return false;
            }
        }else if(condition === "student"){
            if(money < this.priceForTheCamp.student){
                return false;
            }
        }else if(condition === "collegian" ){
            if(money < this.priceForTheCamp.collegian){
                return false;
            }
        }

        return true;
    }
    getParticipant(name){
        if(this.listOfParticipants.length !== 0){
            for (let i = 0; i < this.listOfParticipants.length ; i++) {

                let currentName =this.listOfParticipants[i].name;
                if(currentName === name){
                    return this.listOfParticipants[i];
                }

            }
        }
        return false;

    }
}

let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria')
console.log(camp.registerParticipant('Petar Petarson', 'child', 300)); //The Petar Petarson was successfully registered.
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200)); //The Sara Dickinson was successfully registered.
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson')); //The Sara Dickinson successfully completed the game Battleship.
console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'));// The Sara Dickinson is winner in the game WaterBalloonFights.
console.log(camp.toString());


// `Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`
