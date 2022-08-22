function vectorMath() {
   return function (){ {
           let add =(firstElement , secondElement) => [firstElement[0] + secondElement[0],firstElement[1] + secondElement[1]];
           let multiply = (firstElement,secondElement) => [firstElement[0] * secondElement,firstElement[1] * secondElement];
           let length = (elements) => Math.sqrt(elements[0] * elements[0] + elements[1] * elements[1]);
           let dot = (firstElement,secondElement) => firstElement[0] * secondElement[0] + firstElement[1] * secondElement[1];
           let cross =(firstElement,secondElement) => firstElement[0]  * secondElement[1] - secondElement[0] * firstElement[1];

           return{add,multiply,length,dot,cross}

    }}();
}


let vector = vectorMath();
console.log(vector.add([1, 1], [1, 0]));
console.log(vector.multiply([3.5, -2], 2))
console.log(vector.length([3, -4]));
console.log(vector.dot([1, 0], [0, -1]));
console.log(vector.cross([3, 7], [1, 0]));