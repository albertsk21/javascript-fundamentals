function print(input){

    let delimiter = input.pop();
    
    
    console.log(input.join(delimiter));

}


print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ])