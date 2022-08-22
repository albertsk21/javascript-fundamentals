function townPopulation(townData){



    let towns = [];

    for (let i = 0; i < townData.length ; i++) {

        let name = townData[i].split(" <-> ")[0]
        let population = Number(townData[i].split(" <-> ")[1])

        let town;

        if(findTown(towns,name)){
            town = extractTown(towns,name,population)
        }else{
            town = {
                townName : name,
                townPopulation : population
            }
            towns.push(town);
        }

    }


    for (let i = 0; i <towns.length ; i++) {
        let values =Object.values(towns[i]);
        console.log(`${values[0]} : ${values[1]}`);
    }



    function findTown(towns , name){

        for (let i = 0; i < towns.length; i++) {

            let values =Object.values(towns[i]);

            if(values[i] === name){
                return true;
            }

        }


        return false;
    }
    function extractTown(towns , name,population){

        for (let i = 0; i < towns.length; i++) {

            let values = Object.values(towns[i]);

            if(values[i] === name){

                towns[i].townPopulation += population;

                return towns[i];
            }

        }

    }


}
townPopulation(['Bucharest <-> 1830000', 'Vienna <-> 1900000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])
// townPopulation(['Istanbul <-> 100000', 'Hong Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000'])