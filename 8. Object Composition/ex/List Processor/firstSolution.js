function listProcessor(input){

    let list = [];


    for (let i = 0; i <input.length ; i++) {

        let token = input[i].split(" ");
        let command = token[0];
        let element = token[1];

        if(command === "add"){
            list.push(element);
        }else if(command === "remove"){
            list = list.filter(e => e !== element);
        }else if(command === "print"){
            console.log(list.join(","));
        }

    }

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);