function juice(juiceData) {



    let juices = [];
    let bottlesJuices = [];
    for (let i = 0; i <juiceData.length ; i++) {
        let data = juiceData[i].split(' => ');
        let name = data[0];
        let milliliters = Number(data[1]);
        addJuices(name,milliliters,juices);
        addBottles(juices,bottlesJuices);

    }
    addBottles(juices,bottlesJuices);


    for (let i = 0; i <bottlesJuices.length ; i++) {
        console.log(`${bottlesJuices[i].bottleName} => ${bottlesJuices[i].bottles}`)
    }

    function addJuices(juiceName, juiceMilliliters, juices){
        let juiceExist = false;
        for (let i = 0; i <juices.length ; i++) {
            for (let key in juices[i]) {
                if(juices[i][key] === juiceName){
                    juices[i].milliliters += juiceMilliliters;
                    juiceExist = true;
                }
            }

        }

        if(!(juiceExist)){
            let juice =  {
                name : juiceName,
                milliliters : juiceMilliliters
            }
            juices.push(juice);
        }

    }
    function addBottles(juices ,bottlesJuices){

        for (let i = 0; i <juices.length ; i++) {

            if(juices[i].milliliters >= 1000){
                juices[i].milliliters -= 1000;
                increaseBottles(bottlesJuices,juices[i].name,1)
                i = 0;

            }

        }
    }
    function increaseBottles(bottlesJuices ,juiceName){


        if(bottlesJuices.length === 0){
            let bottleJuice = {
                bottleName : juiceName,
                bottles : 1
            }
            bottlesJuices.push(bottleJuice);
        }else{

            let exist  = false;
            for (let i = 0; i <bottlesJuices.length ; i++) {

                if(bottlesJuices[i].bottleName === juiceName){
                    bottlesJuices[i].bottles += 1;
                    exist = true;
                    break;
                }

            }


            if(!(exist)){
                let bottleJuice = {
                    bottleName : juiceName,
                    bottles : 1
                }
                bottlesJuices.push(bottleJuice);
            }



        }


    }
}
juice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549'])