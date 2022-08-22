function sort(input){


    input.sort(function(a,b){
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;
        return a.localeCompare(b);
    })



    for(let i = 0 ; i < input.length; i++){
        console.log(input[i]);
    }

  }
  sort([ 'test', 'Deny', 'omen', 'Default' ])