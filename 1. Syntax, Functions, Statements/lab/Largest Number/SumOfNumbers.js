function sum(firstString, secondString) {
  

    let n = Number(firstString);
    let m = Number(secondString);



    let result = 0;
    for(let i = n ; i<= m ; i++ ){

        result += i;


    }

    console.log(result);
}


sum('1', '5');
sum('-8', '20');