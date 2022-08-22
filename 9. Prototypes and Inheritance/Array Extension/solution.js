(function arrayExtension() {


    Array.prototype.last = function (){
        return this[this.length-1];
    }

    Array.prototype.skip = function (n){
        let newArr = [];
        for (let i = 0; i < this.length ; i++) {
            if(this[i] !== n){
                newArr.push(this[i]);
            }
        }
        return newArr;
    }

    Array.prototype.take = function (n){
        let newArr = [];
        for (let i = 0; i <= n ; i++) {
            if(i >= this.length){
                break
            }
            newArr.push(this[i]);
        }
        return newArr;
    }

    Array.prototype.sum = function (){
        let sum = 0;
        this.forEach( element => sum+=Number(element));
        return sum;
    }


    Array.prototype.average = function (){
        let sum = 0;
        this.forEach( element => sum+=Number(element));
        sum = sum / this.length;
        return sum;
    }
}())
