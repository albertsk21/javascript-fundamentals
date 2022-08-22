function andAndRemove(input){



    let array = [];



    let increaseNumber = 1;
    for(let i = 0; i < input.length; i++){


        if(input[i] == 'add'){
            array.push(increaseNumber)
        }else if(input[i] == 'remove'){
            if(array.length != 0){
                array.pop()
            }
        }
        increaseNumber++;
    }


    if(array.length != 0 ){

        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
            }
        
    } else{
        console.log('Empty')
    }



}
andAndRemove([ 'remove', 'remove', 'remove' ])