function heroes(){

   let commandCreateHeroes = (function (){

       return {
           mage:(name) => {
                return {
                   name : name,
                   health : 100,
                   mana : 100,
                   cast : function (spell){
                       if(this.mana > 0){
                           this.mana--;
                           console.log(`${name} ${spell}`);
                       }
                   }
               }
           },
           fighter:(name) => {
               return {
                   name : name,
                   health : 100,
                   stamina : 100,
                   fight : function () {
                       if (this.stamina > 0){
                           this.stamina--;
                           console.log(`"${this.name} slashes at the foe!"`)

                       }
                   }

               }
           }
   }
    }());
   return commandCreateHeroes;
}


let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);