function extractSubsequence(input){
  


    let currentNumber = input[0];

    console.log(currentNumber)
    for(let i = 1 ; i < input.length; i++){

        if(currentNumber <= input[i] ){
            currentNumber = input[i];
            console.log(currentNumber);
        }


    }
    
  }
  extractSubsequence([ 1, 2, 3, 4 ])

