function store(products) {

    let arrayProducts = [];
    for (let i = 0; i <products.length ; i++) {
        let data = products[i].split(' : ');
        let product = {
             name : data[0],
             price : Number(data[1])
        }
        arrayProducts.push(product);
    }
    arrayProducts.sort((a,b) => a.name.localeCompare(b.name));

    let currentLetter = arrayProducts[0].name[0];
    console.log(arrayProducts[0].name[0])
    console.log(`  ${arrayProducts[0].name}: ${arrayProducts[0].price}`)

    for (let i = 1; i <arrayProducts.length ; i++) {

        if(currentLetter !== arrayProducts[i].name[0]){
            console.log(arrayProducts[i].name[0])
        }
        currentLetter = arrayProducts[i].name[0];
            console.log(`  ${arrayProducts[i].name}: ${arrayProducts[i].price}`)
    }

}
store(['Banana : 2', 'Rubics Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'])

