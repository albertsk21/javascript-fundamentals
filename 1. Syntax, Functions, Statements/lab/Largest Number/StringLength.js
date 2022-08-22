function findStringLength(firstString, secondString, thirdString){



    let sumOfLength = String(firstString).length + String(secondString).length + String(thirdString).length 
    let averageOfSum = sumOfLength / 3
    console.log(sumOfLength);
    console.log(Math.floor(averageOfSum))

}


findStringLength('chocolate', 'ice cream', 'cake')
findStringLength('pasta', '5', '22.3')