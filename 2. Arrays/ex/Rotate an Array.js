function rotateAnArray(input){
    let iteration = input.pop();


    if(input.length >0){
        for(let i = 0 ; i < iteration; i++){
            let lastNumber  = input.pop();
            input.unshift(lastNumber);
    
        }
        
      console.log(input.join(' '));
    }else if( input.length == 1){

        console.log(input[0])

    }else{
        console.log("")
    }


  }


  rotateAnArray([  '15' ])