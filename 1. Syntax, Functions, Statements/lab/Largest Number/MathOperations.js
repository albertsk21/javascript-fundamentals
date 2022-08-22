function calculate(firstNum, secondNum, operator) {
 
    

    let result = 0;


    if(operator == '+'){
        result = firstNum + secondNum;
    } else if(operator == '-'){
        result = firstNum - secondNum;

    } else if(operator == '*'){
        result = firstNum * secondNum;
    } else if(operator == '/'){
        result = firstNum / secondNum;
    
    } else if(operator == '%'){
        result = firstNum % secondNum;

    }else if(operator == '**'){
        result = firstNum ** secondNum;

    }


    console.log(result)

}
calculate(5, 6, '+')
calculate(3, 5.5, '*')
