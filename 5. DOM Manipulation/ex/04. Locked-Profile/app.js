function lockedProfile() {

    let profiles = document.getElementsByClassName("profile");


    for(let i = 0; i < profiles.length; i++){
    
        
        let showMore = profiles[i].getElementsByTagName("button")[0];

        showMore.addEventListener("click", function(){

            if(profiles[i].getElementsByTagName("input")[1].checked === true){
            
            if(showMore.textContent === "Hide it"){
                profiles[i].getElementsByTagName("div")[0].style.display = "none";                
                showMore.textContent = "Show more";
            }else{
                profiles[i].getElementsByTagName("div")[0].style.display = "block";
                showMore.textContent = "Hide it"
            }
        
            }



        });




    }



}