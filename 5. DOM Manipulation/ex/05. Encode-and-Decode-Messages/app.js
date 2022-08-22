function encodeAndDecodeMessages() {


    let encodeBtn = document.getElementsByTagName("button")[0];
    let decodeBtn = document.getElementsByTagName("button")[1];

    let textEncode = document.getElementsByTagName("textarea")[0]; 
    let textDecode = document.getElementsByTagName("textarea")[1];


    encodeBtn.addEventListener("click",function(){

        let text = textEncode.value;

        if(text === ""){
            return
        }



        let encoded =  encodeFunction(text);
        textDecode.value = encoded; 
        textEncode.value = "";
    });

    decodeBtn.addEventListener("click", function(){



        let text = textDecode.value;
        if(text === ""){
            return
        }
        let decoded = decodeFunction(text);
        textDecode.value = decoded;

    });



    function encodeFunction(text){
        let symbols = text.split("");
        let output ="";
        for(let  i = 0 ; i < symbols.length;i++){
            let letter = symbols[i];
            let ascii = letter.charCodeAt(0) + 1;
            output += String.fromCharCode(ascii);
        }
        return output;
    }


    function decodeFunction(text){

        let symbols = text.split("");
        let output ="";
        for(let  i = 0 ; i < symbols.length;i++){
            let letter = symbols[i];
            let ascii = letter.charCodeAt(0) - 1;
            output += String.fromCharCode(ascii);
        }
        return output;



    }
}