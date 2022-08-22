class Stringer {

    constructor(element, size){
        this.innerString = element;
        this.innerLength  = size;
    }
    decrease(number){
        this.innerLength -= number;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    increase(number){
        this.innerLength += number;
    }
    toString(){
        if(this.innerLength === 0){
            return "...";
        }

        let output = '';

        if(this.innerLength >= this.innerString.length){
            output = this.innerString;
        }else{

            for (let i = 0; i < this.innerLength ; i++) {
                output += this.innerString[i];
            }

            output = output +'...'
        }


        return output;



    }
}
let s = new Stringer("Viktor", 6);
console.log(s.toString())