function solve() {
 
    let selectMenuTo = document.getElementById("selectMenuTo");

    let hexaDecimal = document.createElement("option");
    hexaDecimal.textContent = "hexadecimal";
    hexaDecimal.value = "hexadecimal"
    selectMenuTo.appendChild(hexaDecimal);

    let binary = document.createElement("option");
    binary.textContent = "binary";
    binary.value = "binary";
    selectMenuTo.appendChild(binary);

    let convertButton = document.getElementsByTagName("button")[0];

    convertButton.addEventListener("click",function(){

        let getOption = document.getElementById("selectMenuTo").value;
        let getNumber = document.getElementById("input").value;
        let resultOutput = document.getElementById("result");



        if(getOption === "binary"){

                let element = toBinary(getNumber);
                resultOutput.value = element;
        }else if(getOption == "hexadecimal" ){
            let element = toHexadecimal(getNumber);
            resultOutput.value = element;
        }
    });



   
    function toBinary(elements){
        let number = Number(elements);
        let output = "";
    
    
        while(number > 0){
    
            let remainder = number % 2;
            output += String(remainder);
            number = Math.floor(number /  2);
    
        }
    
        let arr = output.split("");
    
    
        let reverse = "";
        for (let i = arr.length - 1; i >= 0 ; i--) {
            reverse += arr[i];
        }
    
    
        return reverse;
    }

    function toHexadecimal(element){

        let output = "";
        let num = Number(element)
        let hexChars =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        while(num > 0 ){
    
    
            let remainder = num % 16;
            output = hexChars[remainder] + output;
            num = Math.floor(num /16);
        }
    
    
        return output;
    
    }

}