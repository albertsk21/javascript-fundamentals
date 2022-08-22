function magicMatrices(input){


    let currentSum = 0;

    let index = 0;

    let isSame = true;
    for(let column = 0; column < input.length; column++){
        let sum = 0;
        for(let row = 0 ; row < input[column].length; row++){
            sum += input[column][row];
          
        }
        if(index == 0){
            index++;
            currentSum = sum;
        }else if(currentSum != sum){
            isSame = false;
            break
        }

    }


    console.log(isSame)
}

magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ])
magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])