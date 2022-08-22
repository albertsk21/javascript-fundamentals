function solution() {

    let addBtn = document.getElementsByTagName("button")[0];
    let giftName = document.getElementsByTagName("input")[0];
    let sectionCard = document.getElementsByClassName("card")[1];
    let Addgifts = sectionCard.getElementsByTagName("ul")[0];
    let listOfGifts = document.getElementsByClassName("card")[2].getElementsByTagName("ul")[0];
    let discardGifts = document.getElementsByClassName("card")[3].getElementsByTagName("ul")[0];



    addBtn.addEventListener("click",function(e){
        e.preventDefault();
        const target = e.target;
        if(target == addBtn){
            if(giftName.value == ""){
                return;
            }
        }
        let currentLI = document.createElement("li");
        currentLI.classList.add("gift");
        currentLI.innerHTML = giftName.value;

        let sendBtn = document.createElement("button");
        sendBtn.id = "sendButton";
        sendBtn.innerHTML = "Send";

        let discardBtn = document.createElement("button");
        discardBtn.id = "discardButton";
        discardBtn.innerHTML = "Discard";



        sendBtn.addEventListener("click",function(e){
            listOfGifts.appendChild(currentLI);
            discardBtn.remove();
            sendBtn.remove();
        });


        discardBtn.addEventListener("click",function(e){
            discardGifts.appendChild(currentLI);
            discardBtn.remove();
            sendBtn.remove();
        });
        currentLI.appendChild(sendBtn);
        currentLI.appendChild(discardBtn);



        Addgifts.appendChild(currentLI);



        giftName.value = "";
    });
}