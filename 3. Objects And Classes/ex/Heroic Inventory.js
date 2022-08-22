function heroicInventory(heroArr){

    let result = [];
    for (let i = 0; i <heroArr.length ; i++) {

        let array = heroArr[i].split(' / ');

        let name =array[0];
        let level = Number(array[1]);
        let items = array[2] ? array[2].split(', ') : [];




        result.push({name,level,items})

    }



    console.log(JSON.stringify(result))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])