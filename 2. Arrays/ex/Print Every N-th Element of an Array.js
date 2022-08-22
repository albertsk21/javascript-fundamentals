function print(input){
  
    let criteria = input.pop();

    for(let i = 0; input.length; i++){
        if(i % criteria == 0){
            console.log(input[i]);
        }
    }

  }


  print([ '5', '20', '31', '4', '20', '2' ])