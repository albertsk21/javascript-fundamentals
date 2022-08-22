function toggle() {
    let button = document.getElementsByClassName('button')[0].innerHTML;
    let extra = document.getElementById('extra');
    if(button === 'More'){
        extra.setAttribute('style','display: block ;');
        button = "Less"
        document.getElementsByClassName('button')[0].innerHTML = button;
    }else{
        button = "More";
        extra.setAttribute('style',`display: none;`);
        document.getElementsByClassName('button')[0].innerHTML = button;
    }

}