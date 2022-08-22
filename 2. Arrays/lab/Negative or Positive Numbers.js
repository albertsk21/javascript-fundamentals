function negativePositive(input){
    

    let currentArray = [];


    for(let i = 0; i < input.length; i++){
        if(input[i] < 0){
            currentArray.unshift(input[i])
        }else{
            currentArray.push(input[i])
        }
    }
    

    for(let i = 0; i < currentArray.length; i++){
        console.log(currentArray[i]);
    }

  }

   negativePositive([7, -2, 8, 9]);