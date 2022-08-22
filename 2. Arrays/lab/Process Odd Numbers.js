function processOddNumbers(input){
        
        let numbers = input.map(x => x * 2);
     
       

        let filterNumbers = [];
        for(let  i = 0; i < numbers.length; i++){

            if(i % 2 == 0){

            }else {
                filterNumbers.push(numbers[i]);
            }


        }



        filterNumbers.reverse();
        console.log(filterNumbers.join(' '));


  }
  processOddNumbers([ 10, 15, 20, 25 ]);
  processOddNumbers([ 3, 0, 10, 4, 7, 3 ])