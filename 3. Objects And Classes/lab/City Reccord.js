function cityRecord(name, population, treasury){

    let city = {
        cityName : name,
        cityPopulation : population,
        cityTreasury : treasury
    }


    console.log(`{ name: '${city.cityName}', population: ${city.cityPopulation}, treasury: ${city.cityTreasury} }`);


}
cityRecord('Tortuga', 7000, 15000)
cityRecord('Tortuga', 7000, 15000)

for (let key in pencil) {
    console.log(`${key}: ${pencil[key]}`);
}