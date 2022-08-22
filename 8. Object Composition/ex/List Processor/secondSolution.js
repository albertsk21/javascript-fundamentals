function listProcessor(input){

    let list = [];




    let commandsProcessor = (function (){
        return{
            add:(element) => list.push(element),
            remove:(element) =>  list = list.filter(e => e !== element),
            print:() =>   console.log(list.join(","))
        }
    }())


    for (const value of input) {
        let [command, argument] = value.split(" ");
        commandsProcessor[command](argument);
    }


}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);