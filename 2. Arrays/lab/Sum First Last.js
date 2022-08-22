function sumFirstLast(input){



    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.pop());
    console.log(firstNumber + secondNumber)
  }

  sumFirstLast(['20', '30', '40']);