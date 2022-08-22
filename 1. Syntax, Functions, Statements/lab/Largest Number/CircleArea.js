function circleArea(radius) {

    
    if(typeof radius === 'number'){
        let result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2))  
        
    }else{
        console.log(`This calculation cannot be completed using a variable of type: ${typeof radius}.`)
    
    }


};





function solve(input){

    let result;
    let inputType = typeof(input);

    if(inputType === 'number'){
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2))  
    }else{
        console.log(`This calculation cannot be completed using a variable of type: ${inputType}.`)
    }

};



solve(5)
solve('name')

