function objectFactory(input) {


    let objs = JSON.parse(input);
    const concatenate = (a,o) => ({...a,...o});
    const collapseObjects = objs.reduce(concatenate,{});


    return collapseObjects;
}

objectFactory('[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]');