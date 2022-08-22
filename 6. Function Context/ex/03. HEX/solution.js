class Hex {



    constructor(number) {
        this.value = Number(number);
    }

    valueOf(){
        return this.value;
    }
    toString(){
        return this.getHexadecimal(this.value);
    }


    plus(obj){
        let type = typeof  obj;

        let newHex = null;
        if(type === "object"){
            let valueObj = obj.value;
            newHex = new Hex(this.value + valueObj)
        }else{
            newHex = new Hex(this.value + obj);
        }
        return newHex;
    }

    minus(obj){
        let type = typeof  obj;

        let newHex = null;
        if(type === "object"){
            let valueObj = obj.value;
            newHex = new Hex(this.value - valueObj)
        }else{
            newHex = new Hex(this.value - obj);
        }
        return newHex;
    }
    getHexadecimal(decimal){

        let rem = 0;
        let hex = "";
        let hexChars =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

        while(decimal > 0){
            rem = decimal % 16;
            hex = hexChars[rem] + hex;
            decimal= Math.floor(decimal / 16);
        }

        return "0x" + hex;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');