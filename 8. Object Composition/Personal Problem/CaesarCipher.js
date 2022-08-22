function crypt(input){

    let alphabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let cipherArray = ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'];


    let outputArray = [];

    for (let i = 0; i <input.length ; i++) {

        let output = ""
        for (let j = 0; j <input[i].length ; j++) {
            let currentLetter = input[i].charAt(j);
            let letterCrypt = cryptLetter(currentLetter);
            output += letterCrypt;
        }
        outputArray.push(output);
    }


    console.log(outputArray);
    function cryptLetter(letter){

        let exist = false;
        let letterIndex = 0;
        for (let i = 0; i <alphabetArray.length ; i++) {
            let currentLetter = letter.toUpperCase();
            if(alphabetArray[i] ===  currentLetter){
                exist = true;
                letterIndex = i;
                break;
            }
        }
        return cipherArray[letterIndex];
    }

}


crypt(['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']);