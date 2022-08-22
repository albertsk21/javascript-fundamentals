function add(number) {
    let value = number;


    return function (n){
        return value + n;
    }
}

let add7 = add(7);
console.log(add7(2));
console.log(add7(3));