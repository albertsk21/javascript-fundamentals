function breakfastRobot() {


    let carb = 0;
    let flavour = 0;
    let fat = 0;
    let protein = 0;

    return function (input){

        let arrInput = input.split(" ");
        let command = arrInput[0];


        switch (command){
            case "restock":
                let microElement = arrInput[1];
                let quantity = Number(arrInput[2]);

                if(microElement === "flavour"){
                    flavour += quantity;
                }else if(microElement === "protein"){
                    protein += quantity;
                }else if(microElement === "fat"){
                    fat += quantity;
                }else if(microElement === "carbohydrate"){
                    carb += quantity;
                }



                return "Success";


            case "prepare":

                let element = arrInput[1];
                let quantityElement = Number(arrInput[2]);

                let carbNeed = 0;
                let flavourNeed = 0;
                let fatNeed = 0;
                let proteinNeed = 0;

                if(element === "apple"){

                    carbNeed =  quantityElement;
                    flavourNeed = 2 * quantityElement;
                    try {


                    checkCarb(carbNeed);
                    checkFlavour(flavourNeed);
                   }catch (Error){
                   return `${Error}`;
            }
                    carb -= carbNeed;
                    flavour -= flavourNeed;



                }else if(element === "lemonade" ){
                    carbNeed = 10 * quantityElement;
                    flavourNeed = 20 * quantityElement;

                    try {


                    checkCarb(carbNeed);
                    checkFlavour(flavourNeed);
                }catch (Error){
                return `${Error}`;
            }
                    carb -= carbNeed;
                    flavour -= flavourNeed;




                }else if(element === "burger"){
                    carbNeed = 5 * quantityElement;
                    fatNeed = 7 * quantityElement;
                    flavourNeed = 3 * quantityElement;
                try {
                    checkCarb(carbNeed);
                    checkFat(fatNeed);
                    checkFlavour(flavourNeed);
                }catch (Error){
                   return `${Error}`;
            }
                    carb -= carbNeed;
                    fat -= fatNeed;
                    flavour -= flavourNeed;



                }else if(element === "eggs"){

                    proteinNeed = 5 * quantityElement;
                    fatNeed = quantityElement;
                    flavourNeed = quantityElement;

                    try {
                        checkProtein(proteinNeed);
                        checkFat(fatNeed);
                        checkFlavour(flavourNeed);
                    }catch (Error){
                            return `${Error}`;
                    }

                    protein -= proteinNeed;
                    fat -= fatNeed;
                    flavour -= flavourNeed;


                }else if(element === "turkey"){
                    proteinNeed = 10 * quantityElement;
                    carbNeed = 10 * quantityElement;
                    fatNeed = 10 * quantityElement;
                    flavourNeed = 10 * quantityElement;

                try {
                    checkProtein(proteinNeed);
                    checkCarb(carbNeed);
                    checkFat(fatNeed);
                    checkFlavour(flavourNeed);
                }catch (Error){
                    return `${Error}`;
                }
                    protein -= proteinNeed;
                    carb -= carbNeed;
                    fat -= fatNeed;
                    flavour -= flavourNeed;

                }
                return "Success"


            case "report":
                return `protein=${protein} carbohydrate=${carb} fat=${fat} flavour=${flavour}`;

        }



    }

    function checkCarb(carbNeed){
        if(carbNeed > carb){
            throw new Error(`not enough carbohydrate in stock`)
        }

    }
    function checkFlavour(flavourNeed){
        if(flavourNeed > flavour){
            throw new Error(`not enough flavour in stock`)
        }
    }
    function checkFat(fatNeed){
        if(fatNeed > fat){
            throw new Error(`not enough fat in stock`)
        }
    }
    function checkProtein(proteinNeed){
        if(proteinNeed > protein){
            throw new Error(`not enough protein in stock`)
        }
    }



}

let manager = breakfastRobot();


console.log(manager('restock flavour 50'));
manager('prepare lemonade 4')
