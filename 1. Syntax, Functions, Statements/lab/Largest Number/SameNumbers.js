function checkNumber(input) {



    let arraySymbols = String(input).split("");



    let currentNumber = Number(arraySymbols[0]);
    let sum = Number(currentNumber);
    let isSame = true;
    for(let i = 1; i < arraySymbols.length; i++){


        if(currentNumber != arraySymbols[i]){
            isSame = false;
        }
        sum += Number(arraySymbols[i]);
    }


        console.log(isSame);
        console.log(sum);    
    


}



checkNumber(1234)
checkNumber(2222222)