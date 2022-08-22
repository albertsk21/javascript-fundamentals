function biggerHalf(input){
    


    input.sort((a,b) => a - b)

    if(input.length % 2 == 0){
        
        let firstIndex = input.length/2; 
        let lastIndex = input.length ;
        let currentArray = input.slice(firstIndex,lastIndex)

        console.log(`[ ${currentArray.join(', ')} ]`)

    }else{
        
        let firstIndex = Math.ceil(input.length/2); 
        let lastIndex = input.length ;
        
        
        let currentArray = input.slice(firstIndex-1,lastIndex)

       
        console.log(`[ ${currentArray.join(', ')} ]`)
    }
  }
  biggerHalf([ 4, 7, 2, 5 ])
  biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ])