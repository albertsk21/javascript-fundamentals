function speedCheck(speed, areaType) {

    let limit = 0;
    switch(areaType){
        case 'motorway':
           limit = 130;
            break
       case 'interstate':
           limit = 90;
            break
       case 'city':
           limit = 50;
            break
       case 'residential':
           limit = 20;
            break       
        }


        if(speed <= limit){
            console.log();
        }else{
            let difLimit = Math.abs(limit - speed);
            
            if(difLimit <= 20 ){
                console.log('speeding');
            }else if(difLimit <= 40){
                console.log('excessive speeding');
            }else {
                console.log('reckless driving');
            }
        }


}
speedCheck(40, 'city')
speedCheck(21, 'residential')
speedCheck(120, 'interstate')
speedCheck(200, 'motorway')