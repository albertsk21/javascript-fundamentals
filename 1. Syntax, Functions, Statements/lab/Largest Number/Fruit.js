function calculateCost(fruit, weightInGrams, pricePerKG) {

    

    let needMoney = (weightInGrams/1000) * pricePerKG;

    let grams = weightInGrams/1000;
    console.log(`I need $${needMoney.toFixed(2)} to buy ${grams.toFixed(2)} kilograms of ${fruit}.`);


}

calculateCost('oranges', 2500, 1.80)
calculateCost('apples', 1563, 2.35)