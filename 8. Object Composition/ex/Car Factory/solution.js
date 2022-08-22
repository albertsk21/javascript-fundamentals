function carFactory(input){

    let volume = 0;
    let powerToOutput = 0
    if(input.power <= 90){
        powerToOutput = 90;
        volume = 1800;
    }else if(input.power > 90 && input.power <= 120){
        powerToOutput = 120;
        volume = 2400;
    }else if(input.power > 120 && input.power >= 200){
        powerToOutput = 200;
        volume = 3500;
    }
    let wheelSize = input.wheelsize;


    if(wheelSize % 2 === 0 ){
        wheelSize--;
    }


    return {
        model: input.model,
        engine: {
            power: powerToOutput,
            volume: volume
        },
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    }


}
console.log(

    carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    })


);