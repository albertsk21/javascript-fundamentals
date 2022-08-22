function cars(input){

    let map = new Map();

    let commands = (function (){
        return {
                create: ([name, ,parent]) => {


                    parent = parent ? map.get(parent) : null;
                    let newObj = Object.create(parent);
                    map.set(name, newObj);
                    return newObj;
                },

                set:([name,key,value]) => {
                    let obj = map.get(name);
                    obj[key] = value;
                },

            print:([name]) => {
                let obj = map.get(name);
                let entries = Object.entries(obj);
                let prototypes = Object.getPrototypeOf(obj);

                let allArr = [];
                for (let i = 0; i <entries.length; i++) {


                    let arr = [];
                    arr.push(entries[i][0]);
                    arr.push(entries[i][1]);
                    allArr.push(arr);
                }
                if(prototypes !== null){
                    let entriesPrototype = Object.entries(prototypes);
                    for (let i = 0; i <entriesPrototype.length; i++) {
                        let arr = [];
                        arr.push(entriesPrototype[i][0]);
                        arr.push(entriesPrototype[i][1]);
                        allArr.push(arr);

                    }

                    let secondPrototypes = Object.getPrototypeOf(prototypes);

                    if(secondPrototypes !== null){
                        let secondPrototypes = Object.getPrototypeOf(prototypes);
                        let secondEntriesPrototype = Object.entries(secondPrototypes);
                        for (let i = 0; i <secondEntriesPrototype.length; i++) {
                            let secondArr = [];
                            secondArr.push(secondEntriesPrototype[i][0]);
                            secondArr.push(secondEntriesPrototype[i][1]);
                            allArr.push(secondArr);

                        }

                    }

                }


                let  output = "";
                for (let i = 0; i < allArr.length ; i++) {

                    let currentArr = allArr[i];



                    if(i === allArr.length -1){
                        output += `${currentArr[0]}:${currentArr[1]}`
                    }else{
                        output += `${currentArr[0]}:${currentArr[1]}, `
                    }

                }

                console.log(output);

            }
        }
    }());


    for (let i = 0; i <input.length ; i++) {
        let tokens = input[i].split(" ");
        let command = tokens.shift();


        commands[command](tokens);
    }
}

cars( ['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);