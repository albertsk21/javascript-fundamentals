function  largestNumber(firstNum, secondNum, thirdNum) {


    let array = [firstNum,secondNum,thirdNum]



    let largest = -999999999;
    for(let i = 0 ; i < array.length; i++){


        if(array[i] >= largest){
            largest = array[i];
        }

    }


    console.log("The largest number is " + largest+".");


}



largestNumber(-3, -5, -22.5);
largestNumber(5, -3, 16);