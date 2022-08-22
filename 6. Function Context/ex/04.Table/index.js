function solve() {
   
    let elements = document
        .getElementsByClassName("minimalistBlack")[0]
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr")


     for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener("click",function(){
           
            let currentBackground = elements[i].style.backgroundColor;


            for(let i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor =  "";
            } 
            
            if( currentBackground ===  "rgb(65, 63, 94)" ){

                elements[i].style.backgroundColor =  "";
            }else{
                elements[i].style.backgroundColor = "rgb(65, 63, 94)";
            }

           
        });

     }   

   

}
