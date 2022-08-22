function solve() {

    let expressionOutput = document.getElementById("expressionOutput");
    let buttons = document.getElementsByTagName("button");
    let resultOutput = document.getElementById("resultOutput");


    for(let i = 0 ; i < buttons.length; i++){
        buttons[i].addEventListener("click",function(){
             if(buttons[i].value === "Clear"){

                expressionOutput.textContent = "";
                resultOutput.textContent = "";
            } else if(buttons[i].value !== "="){

                if(buttons[i].value !== "*" && buttons[i].value !== "/" && buttons[i].value !== "-" && buttons[i].value !== "+" ){
                    expressionOutput.textContent += `${buttons[i].value}`
                }else{
                    expressionOutput.textContent += ` ${buttons[i].value} `
                }
            } else {


                let stringExpression = String(expressionOutput.textContent);

                if(isValid(stringExpression)){
                    resultOutput.textContent = eval(expressionOutput.textContent);    
                }else{
                    expressionOutput.textContent = "";
                    resultOutput.textContent = "NaN";        
                }

            } 
    });
    }
    

  

    function isValid(Expression){
        let symbols = Expression.split(/\s+/);
        
        if(symbols[symbols.length - 1] === ""){
            symbols.pop();   
        }
        
         if(isNumberWithDot(symbols[0])){
        return false;
       }
        let firstSymbol = symbols[0];
        for(let  i = 1 ; i < symbols.length; i++){
    
            let secondSymbol = symbols[i];
    
    
            if(isOperator(firstSymbol) &&  isOperator(secondSymbol)){
                return false;
            }else if(isNumberWithDot(firstSymbol) && isOperator(secondSymbol)){
                return false;
            }else if(isOperator(firstSymbol) &&  isNumberWithDot(firstSymbol)){
                return false;
            }else if(isNumberWithDot(firstSymbol) && isNumberWithDot(secondSymbol)){
                return false;
            }else{
                firstSymbol = secondSymbol;
            }
    
        }
    
        return true;
    }
    


function isOperator(symbol){

    switch(symbol){
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;
    }

    return false;


}

function isNumberWithDot(symbols){
    let arr =  symbols.split("")
    return arr[arr.length - 1] === ".";
}

}