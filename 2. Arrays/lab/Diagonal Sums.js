function diagonalSums(input){


    let firstDiagonalSum = 0;
        for(let column = 0; column < input.length; column++){
            for(let row = column ; input[row].length;){
                firstDiagonalSum += input[row][column];
                break;
            }
        }

    


         let secondDiagonalSum = 0;
        let decreaseIndex = input.length-1;
        for(let column = 0; column < input.length; column++){
            for(let row = decreaseIndex ; row >= 0; ){
            secondDiagonalSum += input[column][row];
            break
            }
            decreaseIndex--;
        }

        console.log( firstDiagonalSum + ' ' + secondDiagonalSum );

  }
  diagonalSums([ [ 20, 40 ], [ 10, 60 ] ])