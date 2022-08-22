function ticTacToe(input){
    let table = [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let index = 0;
    let startGame = true;
    let weHaveWinner = false;
    for(let  i = 0;  i < input.length; i++){

        let elementsArray = input[i].split(' ');
        let column = Number(elementsArray[0]);
        let row = Number(elementsArray[1]);

        if(checkPosition(column,row,table)){
            console.log('This place is already taken. Please choose another!');

        }else {

            if(index === 1){
                table[column][row] = 'X'
                index = 2;

            } else if(startGame === true){
                index = 2;
                startGame = false;
                table[column][row] = 'X'

            }else if(index === 2){
                table[column][row] = 'O'
                index = 1;
            }

        }


        if(checkWinner(table,'X')){
            console.log('Player X wins!')
            weHaveWinner = true;
            break
        }else if(checkWinner(table,'O')){
            console.log('Player O wins!')
            weHaveWinner = true;
            break
        }




    }

    if(!(weHaveWinner)){
        console.log('The game ended! Nobody wins :(')
    }


    print(table);




    function print(table){
        let output = '';
        for(let  column = 0;  column < table.length; column++){

            for(let  row = 0;  row < table[column].length; row++){

                output +=  table[column][row] + '\t';

            }

            console.log(output);
            output = '';


        }
    }
    function checkPosition(column, row, table){
         let extract = table[column][row];
         return !(extract === false);
    }

    function checkWinner(table, player){

        let counter = 0;
        for (let column = 0; column <table.length ; column++) {
            for (let row = 0; row <table[column].length ; row++) {
                if(table[column][row] === player){
                    counter++;
                }
            }
            if(counter === 3){
                return true;
            }
            counter = 0;
        }

        let row = 0;

        for (let column = 0; column < table.length ; column++) {
            for (let i = 0; i < 3 ; i++) {

                let element = table[i][row];

                if(element === player){
                    counter++;
                }

            }
            if(counter === 3){
                return true;
            }
            counter = 0;
            row++;
        }



        let element1 = table[0][0];
        let element2 = table[1][1];
        let element3 = table[2][2];

        if(element1 === player && element2 === player && element3 === player){
            return true;
        }
         element1 = table[2][0];
         element2 = table[1][1];
         element3 = table[0][2];

        if(element1 === player && element2 === player && element3 === player){
            return true;
        }

    }

}



ticTacToe([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ])
// ticTacToe([ '0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1' ])