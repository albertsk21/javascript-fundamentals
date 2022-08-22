function cook(array) {


    let number = Number(array[0]);

    for(let i = 1; i < array.length; i++){
        number = operationByCommand(number,array[i]);
       console.log(number);
    }



    function operationByCommand(number ,command){
        switch(command){
            case 'chop':
                number = number / 2;
                break;
    
            case 'dice':
                number = Math.sqrt(number);
                break;
    
            case 'spice':
                number++;
                break;
    
            case 'bake':
                number = number * 3;
                break;
    
            case 'fillet':
                number = number - (number * 0.2);
                break;
    
        }
    
        return number;
    
    }
    
    
}



cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);