

(function stringExtension(){


    String.prototype.ensureStart = function (strStart){
        let currentStr = this.toString();
        if(!currentStr.startsWith(strStart)){
            return  strStart + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (strEnd){

        if(!this.toString().endsWith(strEnd)){
            return this.toString() + strEnd;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function (){
        return this.toString() === "";
    };


    String.prototype.truncate = function (n){

        if(n <= 3){
            return ".".repeat(n);
        }
        if (this.toString().length < n) {
            return this.toString();
        } else {
            let arr = this.toString().split(' ');

            let currentElement = arr.pop();
            if( currentElement  === "..." && (arr.length !== 1)){
                arr.pop();
            } else if(arr.length === 1){
                arr = arr[0].split("");

                let counter = 0;

                while (true){
                    if(counter === Number(n)){
                        break
                    }
                    arr.pop();
                    counter++;
                }
                arr.push("...")
                return arr.join("");
            }
            arr.push("...");
            return arr.join(' ');
        }

    }
    String.format  = function(sequence,...elements){

        let arr = sequence.split(" ");


        let arrElements = elements;
        let indexToReplace = 0;
        for (let i = 0; i <arr.length ; i++) {
            let replaceSymbol = `{${indexToReplace}}`
            if(arr[i] ===  replaceSymbol && arrElements.length !== 0){
                arr[i] = arrElements.shift();
                indexToReplace++;
            }
        }


        return arr.join(" ");
    }
}())

var testString = 'quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');