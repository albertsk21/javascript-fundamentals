function getFibonator() {

  let valueOne = 0;
  let valueTwo = 1;
  let mainValue = 0;
  return function (){

    mainValue = valueOne + valueTwo
    valueTwo = valueOne;
    valueOne = mainValue;

     return valueOne;
  }

}
