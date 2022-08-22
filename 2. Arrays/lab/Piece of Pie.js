function pieceOfPie(input, startSection, endSection){
    

    let concatedArray = input.slice(input.indexOf(startSection) ,input.indexOf(endSection)+1);

 



    let output = '[ ';
    for(let  i = 0; i < concatedArray.length; i++){

        if(i == concatedArray.length - 1){

            output += "'"+ concatedArray[i] +"'";

        }else{  
            output += "'"+concatedArray[i]+"'"  + ', '
        }

    }

    output += ' ]';


    console.log(output);
    
  }

  pieceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie')